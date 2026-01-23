
const Register = () => {
  return (
    <div>
      <form>
        <div className="pt-2">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input type="text"
              name="name"
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
                  className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer"
                >
                  <p >{role}</p>
                </button>
              )
            })}
            
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-3 text-lg rounded-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;