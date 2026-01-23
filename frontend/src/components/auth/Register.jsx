import { useState } from "react";

const Register = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole })
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="pt-2">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="pt-2">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter employee email"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="pt-2">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee phone
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter employee phone number"
              className="bg-transparent flex-1 text-white focus:outline-none [appearance:textfield] 
              [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
          </div>
        </div>
        <div className="pt-2">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Chose your role</label>
          <div className="flex items-center gap-3">
            {["Waiter", "Cashier", "Admin"].map((role) => {
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelection(role)}
                  className={`px-4 py-3 w-full rounded-lg cursor-pointer ${formData.role === role ? "bg-yellow-400 text-gray-900 " : "bg-[#1f1f1f] text-[#ababab]"
                    }`}
                >
                  <p >{role}</p>
                </button>
              )
            })}

          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full mt-6 py-3 text-lg rounded-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;