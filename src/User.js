import React from "react";

export const User = props => {
  let { user } = props;
  return (
    <ul>
      <li>
        This is {user.name}.His age is {user.age}
      </li>
    </ul>
  );
};
