import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./SupabaseConfiguration";

function Login() {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) {
      alert(authError.message);
      return;
    }

    localStorage.setItem("email", email);

    try {
      const { data: userData, error: userError } = await supabase
        .from("user_database")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      if (userError) throw userError;

      console.log("User data:", userData);

      if (userData.role === "admin") {
        navigation("/AdminDashboard");
      } else if (userData.role === "Fleet Manager") {
        navigation("/fleetManagerDashboard");
      } else {
        alert("No dashboard assigned for this role!");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching user data");
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data, error } = await supabase
          .from("user_database")
          .select("*");

        if (error) {
          console.error("Supabase error:", error);
        } else {
          console.log("All user data:", data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="flex items-center bg-gray-200 w-screen h-screen justify-center">
      <div className="border w-6/12 border-gray-300 bg-white p-6 shadow">
        <div>
          <p className="text-[#2e294e] text-xl font-bold">Sign In</p>
          <p className="text-[#8661c1]">Sign In to your growth.</p>
        </div>

        <div className="my-7">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="mb-1 text-[#2e294e] font-semibold">Email</p>
              <input
                onChange={(event) => {
                  setemail(event.target.value);
                }}
                placeholder="anurag@gmail.com"
                className="border border-gray-300  p-1.5 w-full"
              />
            </div>

            <div>
              <p className="mb-1 text-[#2e294e] font-semibold">Password</p>
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
              <p className="text-[#2e294e]">Don't have an account ?</p>
              <button
                onClick={() => {
                  navigation("/SignUp");
                }}
                className="font-bold text-[#8661c1]"
              >
                Sign Up
              </button>
            </div>
            <button className="text-[#2e294e] font-semibold">
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={() => {
              handleLogin();
            }}
            className="bg-[#8661c1] text-white py-1 px-5 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
