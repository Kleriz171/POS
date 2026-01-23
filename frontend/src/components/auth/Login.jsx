
const Login = () => {
  return (
        <div>
      <form>
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

        <button
          type="submit"
          className="w-full mt-6 py-3 text-lg rounded-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;