import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
export default function Account() {
  return (
    <div id="wd-account-screen" className="bg-base-100 p-6 min-h-screen">
      <div className="flex">
        <div className="w-1/6">
          <AccountNavigation />
        </div>
        <div className="flex-grow p-4">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/Kanbas/Account/Signin" />}
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
