
import Link from "next/link";

import React, { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
 

  
    const username = "example@example.com";
    const correctPassword = "password";

    if (email === username && password === correctPassword) {
      window.location.href = "/login-foodlist-details";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden login-background">
      <div className="login-reg">
        <div className="w-full p-6 bg-black bg-opacity-50 rounded-md shadow-md lg:max-w-[500px] text-white">
          <h1 className="text-3xl font-bold text-center mb-6">Login to Curry Heaven</h1>
          <form className="mb-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2  bg-neutral-200 text-black rounded-md focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 bg-neutral-200 text-black rounded-md focus:ring focus:ring-opacity-40"
              />
            </div>
            {error && <p className="text-black text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="col-span-2 w-full px-4 py-2 bg-[red] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </form>

          <div className="relative flex items-center justify-center w-full mt-8 border border-t">
            <div className="absolute px-5 bg-neutral-200  text-black pt-1">Or Login Using</div>
          </div>
          <div className="flex mt-8 gap-x-2 text-white">
            <button className="flex items-center justify-center w-full p-2 bg-blue-600 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white mr-2">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"/>
              </svg>
              Facebook
            </button>
            <button className="flex items-center justify-center w-full p-2 bg-red-600 rounded-md text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white mr-2">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
              </svg>
              Google Plus
            </button>
          </div>

          <p className="mt-6 text-sm text-center">
            Don't have an account?{" "}
            <Link href="/sign-up" className="font-medium text-blue-300 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-2 text-sm text-center">
            <Link href="/" className="text-blue-300 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
