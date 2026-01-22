
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
      </form>
    </div>
  );
};

export default Register;