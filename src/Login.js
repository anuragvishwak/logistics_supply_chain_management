import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./SupabaseConfiguration";

function Login() {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      console.log(data);
      navigation("/fleetManagerDashboard");
      localStorage.setItem("email", email);
    }
  };

  return (
    <div className="flex items-center bg-gray-200 w-screen h-screen justify-center">
      <div className="border w-6/12 border-gray-300 bg-white p-6 shadow">
        <div>
          <p className="text-[#4a2c40] text-xl font-bold">Sign In</p>
          <p className="text-[#f1b81c]">Sign In to your growth.</p>
        </div>

        <div className="my-7">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="mb-1 text-[#4a2c40] font-semibold">Email</p>
              <input
                onChange={(event) => {
                  setemail(event.target.value);
                }}
                placeholder="anurag@gmail.com"
                className="border border-gray-300  p-1.5 w-full"
              />
            </div>

            <div>
              <p className="mb-1 text-[#4a2c40] font-semibold">Password</p>
              <input
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                placeholder="**********"
                className="border border-gray-300  p-1.5 w-full"
              />
            </div>
          </div>
          <div className="flex items-center mt-1 justify-between">
            <div className="flex items-center justify-end space-x-1">
              <p className="text-[#4a2c40]">Don't have an account ?</p>
              <button
                onClick={() => {
                  navigation("/SignUp");
                }}
                className="font-bold text-[#f1b81c]"
              >
                Sign Up
              </button>
            </div>
            <button className="text-[#4a2c40] font-semibold">
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={() => {
              handleLogin();
            }}
            className="bg-[#f1b81c] text-[#4a2c40] py-1 px-5 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
