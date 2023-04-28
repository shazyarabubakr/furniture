import React, { useState } from "react";
import loginImage from "../asset/image/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-beige border-2 p-4 pr-12 text-sm "
                placeholder="Enter email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-beige border-2 p-4 pr-12 text-sm "
                placeholder="Enter password"
              />
              {visible ? (
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <i
                    className="fi fi-rr-eye cursor-pointer"
                    onClick={() => setVisible(false)}
                  ></i>
                </span>
              ) : (
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <i
                    className="fi fi-rr-eye-crossed cursor-pointer"
                    onClick={() => setVisible(true)}
                  ></i>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="text-beige font-semibold" to="/signup">
                Sign up
              </Link>
            </p>

            <Link
              to="/"
              className=" items-center  md:px-7 md:py-2.5 px-5 py-1.5  text-sm font-medium md:text-xl tracking-wide text-white transition duration-200 rounded shadow-md bg-beige hover:bg-lightBeige focus:shadow-outline focus:outline-none"
            >
              Login
            </Link>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src={loginImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
