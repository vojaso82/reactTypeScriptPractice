import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogIn = () => {
    setUser({
      name: "SomeHardCodedUSer",
      email: "SomeHardCodedUSer@yopmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User name is {user?.email}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
