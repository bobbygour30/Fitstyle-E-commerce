import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.sucess) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.sucess) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-[90%] sm:max-w-96 flex flex-col items-center gap-3 mx-auto mt-14 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="w-8 border-none h-[1.5px] bg-gray-700" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full border border-gray-400 p-2 rounded-md"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        className="w-full border border-gray-400 p-2 rounded-md"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        className="w-full border border-gray-400 p-2 rounded-md"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In " : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
