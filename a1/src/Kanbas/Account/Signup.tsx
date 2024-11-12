import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-6 max-w-lg space-y-4">
      <h3 id="wd-signup-title" className="text-2xl font-semibold">
        Sign up
      </h3>

      <input
        placeholder="Username"
        className="input input-bordered w-full"
        id="wd-username"
      />

      <input
        placeholder="Password"
        type="password"
        className="input input-bordered w-full"
        id="wd-password"
      />

      <input
        placeholder="Verify Password"
        type="password"
        className="input input-bordered w-full"
        id="wd-password-verify"
      />

      <div className="mt-4">
        <Link
          to="/Kanbas/Account/Profile"
          id="wd-signup-btn"
          className="btn btn-primary w-full"
        >
          Sign up
        </Link>
      </div>

      <div className="text-sm mt-2">
        <Link
          to="/Kanbas/Account/Signin"
          id="wd-signin-link"
          className="link link-primary"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
