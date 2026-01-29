import { useState } from "react";

const Header = (props) => {
  const [userName, setUserName] = useState(null);

  const Logout = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl font-medium">
        Hello <br />
        <span className="font-semibold text-4xl">userName</span>
      </h1>
      <button
        onClick={Logout}
        className="border-2 border-emerald-600 text-xl font-bold rounded-full py-2 px-8 outline-none bg-emerald-600 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
