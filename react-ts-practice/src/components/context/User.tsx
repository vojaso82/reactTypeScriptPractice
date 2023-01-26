import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogIn = () => {
    if (userContext) {
      userContext.setUser({
        name: "someUser",
        email: "someUser@yopmail.com",
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User name is {userContext?.user?.email}</div>
    </div>
  );
};
