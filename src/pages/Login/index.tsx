import { useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  emailAddress: string;
  password: string;
};
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) =>
    alert(`Data ready:\n${JSON.stringify(data, null, 4)}`)
  );
  return (
    <div className="bg-home-page bg-no-repeat bg-cover min-h-screen pt-16">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-96 bg-white rounded-lg shadow-lg relative px-4">
          <div className="absolute -top-12 left-0 right-0 px-4">
            <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-center space-y-4 px-4 py-6 rounded-md shadow-md">
              <p className="text-white text-xl font-semibold">Login</p>
              <ul className="flex items-center justify-center space-x-6">
                <li>
                  <a
                    className="text-white text-3xl hover:text-white/70"
                    href="http://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-3xl hover:text-white/70"
                    href="http://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-3xl hover:text-white/70"
                    href="http://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10">
            <p className="mt-16 text-center text-gray-500">Or Be Classical</p>
            <form onSubmit={onSubmit} className="mt-4 space-y-6 px-4">
              <label className="flex items-center space-x-3">
                <span className="w-8 text-2xl text-gray-500 text-center">
                  <i className="fa fa-smile-o" />
                </span>
                <div className="flex-1 flex flex-col space-y-2">
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                    className=" py-2 border-b border-gray-300 hover:border-pink-500 focus:border-pink-500 text-gray-300 outline-0"
                  />
                  {errors.firstName && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </label>
              <label className="flex items-center space-x-3">
                <span className="w-8 text-2xl text-gray-500 text-center">
                  <i className="fa fa-envelope" />
                </span>
                <div className="flex-1 flex flex-col space-y-2">
                  <input
                    type="email"
                    {...register("emailAddress", { required: true })}
                    placeholder="Email Address"
                    className=" py-2 border-b border-gray-300 hover:border-pink-500 focus:border-pink-500 text-gray-300 outline-0"
                  />
                  {errors.emailAddress && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </label>
              <label className="flex items-center space-x-3">
                <span className="w-8 text-2xl text-gray-500 text-center">
                  <i className="fa fa-lock" />
                </span>
                <div className="flex-1 flex flex-col space-y-2">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className=" py-2 border-b border-gray-300 hover:border-pink-500 focus:border-pink-500 text-gray-300 outline-0"
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-pink-500 hover:bg-pink-500 hover:text-white rounded-lg"
                >
                  LES'S GO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
