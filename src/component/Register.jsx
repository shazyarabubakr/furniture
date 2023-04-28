import React, { useState } from "react";
import register from "../asset/image/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="furniture"
              src={register}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Diwaxan
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="firstName"
                    placeholder="first name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 w-full rounded p-4 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="lastName"
                    placeholder="last name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 w-full rounded p-4 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="mt-1 w-full rounded-md p-4 text-sm text-gray-700 shadow-sm"
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

                <div className="col-span-6 sm:col-span-3 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="mt-1 w-full rounded-md p-4 text-sm text-gray-700 shadow-sm"
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

                <div className="col-span-6">
                  <label for="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>
                {/* 
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <Link to="#" className="text-gray-700 underline">
                      terms and conditions
                    </Link>
                    and
                    <Link to="#" className="text-gray-700 underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div> */}

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded bg-beige px-12 py-3 text-sm font-medium text-white transition hover:bg-lightBeige  focus:outline-none focus:ring ">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/login" className=" text-beige font-semibold ">
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
