import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200"
          placeholder="Email"
        />
      </form>
    </div>
  );
};
