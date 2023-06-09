import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

const Users = () => {
  const {
    loginStore: { users },
  } = useSelector((state) => state);

  return (
    <section className="flex-col mt-8">
      <article className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
        <p>Welcome user</p>
      </article>
      <table className="mt-8">
        <tbody>
          <tr className="border w-80 h-8">
            <th className={`border w-24 h-8 text-center py-2`}>Id</th>
            <th className="border w-56 h-8">Name</th>
          </tr>
        </tbody>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={`border w-80 h-8`}>
              <td
                style={{ backgroundColor: `${user.color}` }}
                className="border w-24 h-8 text-center py-2"
              >
                {user.id}
              </td>
              <td
                style={{ backgroundColor: `${user.color}` }}
                className="border w-24 h-8 pl-5 py-2 font-md text-md"
              >
                {user.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
