import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, removeAllItems } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query"
import { addOrder, updateTable } from "../../https/index"
import { removeCustomer } from "../../redux/slices/customerSlice";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#ffffff",
    display: "flex",
    alignContent: "center",
  },
  section: {
    marginBottom: 10,
  },
  item: {
    fontSize: 12,
    marginBottom: 4,
  },
});

const MyDocument = ({ cartData, total, tax, totalAfterTax }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text>Receipt</Text>

      <View style={styles.section}>
        {cartData.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
        ))}
      </View>
      <Text>Total: ${total.toFixed(2)}</Text>
      <Text>Tax: ${tax.toFixed(2)}</Text>
      <Text>Final Total: ${totalAfterTax.toFixed(2)}</Text>
    </Page>
  </Document>
);

const Bill = () => {
  const dispatch = useDispatch()

  const customerData = useSelector((state) => state.customer)
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5;
  const tax = (total * taxRate) / 100;
  const totalAfterTax = total + tax;

  const [paymentMethod, setPaymentMethod] = useState();
  const [showReceipt, setShowReceipt] = useState(false);

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log(resData)
      dispatch(removeCustomer())
      dispatch(removeAllItems()) // FIXED: was removeItems()
    },
    onError: (error) => {
      console.log(error)
      enqueueSnackbar("Failed to update table", { variant: "error" })
    }
  })

  const ordermutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      console.log("Order response:", resData)
      const order = resData.data.order;
      
      // FIXED: Extract order ID from the order object
      const orderId = order._id;
      
      if (!orderId) {
        console.error("No order ID received:", order)
        enqueueSnackbar("Order created but ID missing", { variant: "warning" })
        return;
      }

      // Update Table
      const tableData = {
        id: customerData.table?.tableId,
        status: "Booked",
        orderId: orderId
      }

      setTimeout(() => {
        tableUpdateMutation.mutate(tableData)
      }, 1500)
    },
    onError: (error) => {
      console.log(error)
      enqueueSnackbar(error?.message || "Failed to place order", { variant: "error" })
    }
  })

  const handlePlaceOrder = () => {
    // Validate payment method
    if (!paymentMethod) {
      enqueueSnackbar("Please select a payment method!", {
        variant: "warning",
      });
      return;
    }

    // Validate cart not empty
    if (!cartData || cartData.length === 0) {
      enqueueSnackbar("Cart is empty!", {
        variant: "warning",
      });
      return;
    }

    // Validate customer data
    if (!customerData.table) {
      enqueueSnackbar("No table selected!", {
        variant: "warning",
      });
      return;
    }

    const orderData = {
      customerDetails: {
        name: customerData.customerName,
        phone: customerData.customerPhone,
        guests: customerData.guests,
      },
      orderStatus: "In Progress",
      bills: {
        total: total,
        tax: tax,
        totalWithTax: totalAfterTax
      },
      items: cartData,
      table: customerData.table?.tableId || null,
      paymentMethod: paymentMethod // Added payment method to order
    }

    enqueueSnackbar("Placing order...", { variant: "info" });
    
    setTimeout(() => {
      ordermutation.mutate(orderData)
    }, 500) // Reduced timeout
  };

  const handlePrintReceipt = () => {
    if (!cartData || cartData.length === 0) {
      enqueueSnackbar("Cart is empty!", {
        variant: "warning",
      });
      return;
    }
    setShowReceipt(true);
  };

  return (
    <>
      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-11/12 h-5/6 relative">
            <button
              onClick={() => setShowReceipt(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
            >
              Close
            </button>
            <PDFViewer width="100%" height="100%">
              <MyDocument
                cartData={cartData}
                total={total}
                tax={tax}
                totalAfterTax={totalAfterTax}
              />
            </PDFViewer>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pt-2 mb-2 text-white px-4">
        <span>Items ({cartData.length})</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center mb-2 text-white px-4">
        <span>Tax ({taxRate}%)</span>
        <span className="font-semibold">${tax.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center mb-2 text-white px-4">
        <span className="font-bold">Total after tax</span>
        <span className="font-bold">${totalAfterTax.toFixed(2)}</span>
      </div>

      <div className="flex gap-2 mb-4 px-4">
        <button
          onClick={() => setPaymentMethod("Cash")}
          className={`bg-[#1f1f1f] w-full px-4 py-3 rounded-lg font-semibold text-white ${
            paymentMethod === "Cash" && "bg-[#383737]"
          }`}
        >
          Cash
        </button>
        <button
          onClick={() => setPaymentMethod("Online")}
          className={`bg-[#1f1f1f] w-full px-4 py-3 rounded-lg font-semibold text-white ${
            paymentMethod === "Online" && "bg-[#383737]"
          }`}
        >
          Online
        </button>
      </div>

      <div className="flex gap-2 px-4">
        <button
          onClick={handlePrintReceipt}
          className="bg-orange-500 w-full px-4 py-3 rounded-lg font-semibold"
        >
          Print receipt
        </button>
        <button
          onClick={handlePlaceOrder}
          disabled={ordermutation.isPending}
          className="bg-blue-600 w-full px-4 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {ordermutation.isPending ? "Placing..." : "Place Order"}
        </button>
      </div>
    </>
  );
};

export default Bill;