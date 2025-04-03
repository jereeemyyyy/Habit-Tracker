import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axioInstance";
import { API_PATHS } from "../utils/apiPath";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Login API call
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
            email,
            password,
        });

        const { token, user } = response.data;

        if (token) {
            localStorage.setItem("token", token);
            navigate("/home");
        }
    } catch (err) {
        if (err.response && err.response.data.message) {
            console.error(err.response.data.message);
        } else {
            console.error("Something went wrong. Please try again later.");
        }
    }
  };

  return (
    <>
        <div className="mt-40 -mb-54  items-center flex justify-center">
            <h1 className="text-white font-bold text-5xl">
                Habit Tracker.
            </h1>
        </div>
        
        <div className="flex justify-center items-center h-screen bg-transparent w-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    className="text-black border-black mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    className="text-black order-black mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                Login
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                Register here
                </Link>
            </p>
            </div>
        </div>
    </>
  );
};

export default Login;
