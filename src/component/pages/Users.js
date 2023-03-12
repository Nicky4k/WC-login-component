import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const {
    loginStore: { users },
  } = useSelector((state) => state);
  console.log(users);

  return (
    <table className="border w-80 mt-16">
      <tr className="border w-80 h-8">
        <th className={`border w-24 h-8 text-center py-2`}>Id</th>
        <th className="border w-56 h-8">Name</th>
      </tr>
      {users.map((user) => (
        <tr className={`border w-80 h-8`}>
          <td
            style={{ backgroundColor: `${user.color}` }}
            className="border w-24 h-8 text-center py-2"
          >
            {user.id}
          </td>
          <td
            style={{ backgroundColor: `${user.color}` }}
            className="border w-24 h-8 text-center py-2 font-semibold text-md"
          >
            {user.name}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Users;
