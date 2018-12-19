import React from "react";

export const User = props => {
  let { user } = props;
  return (
    <li>
      This is {user.name}.His age is {user.age}
    </li>
  );
};
