import React, { use, useState, useEffect } from 'react'
import { getAdminFromLocalStorage, getEmployeesFromLocalStorage, saveAdminToLocalStorage, saveEmployeesToLocalStorage } from '../utils/LocalStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  const [adminData, setAdminData] = useState(null)
  // localStorage.clear();
  useEffect(() => {
    saveEmployeesToLocalStorage()
    const employees = getEmployeesFromLocalStorage();
    setUserData(employees);
    saveAdminToLocalStorage();
    const admin = getAdminFromLocalStorage();
    setAdminData(admin);
  }, [])

  return (
    <AuthContext.Provider value={{ userData, adminData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider