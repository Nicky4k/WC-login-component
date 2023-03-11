import React from "react";
import { useSelector } from "react-redux";

type Props = {
  user: String;
};

const Users = (props: Props) => {
  const {
    loginStore: { users },
  } = useSelector((state) => state);

  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user}</li>
      ))}
    </ul>
  );
};

export default Users;
