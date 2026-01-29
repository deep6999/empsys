import React, { use, useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmpDashboard from "./components/dashboard/EmpDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import {
  getEmployeesFromLocalStorage,
  saveAdminToLocalStorage,
  saveEmployeesToLocalStorage,
} from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const { userData, adminData } = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      adminData &&
      adminData.some(
        (admin) => admin.email === email && admin.password === password,
      )
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (emp) => emp.email === email && emp.password === password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {user === null && <Login handleLogin={handleLogin} />}
      {user === "employee" && <EmpDashboard changeUser={setUser} data={loggedInUserData}/>}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
    </div>
  );
};

export default App;
