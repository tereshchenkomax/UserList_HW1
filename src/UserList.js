import React, { Component } from "react";
import { User } from "./User";

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Bill", age: 50 },
        { id: 2, name: "Tom", age: 40 },
        { id: 3, name: "Pete", age: 30 },
        { id: 4, name: "Ashley", age: 20 },
        { id: 5, name: "Greg", age: 60 }
      ]
    };
  }

  render() {
    let { users } = this.state;
    return users
      .sort((a, b) => a.age - b.age)
      .map(user => <User user={user} key={user.id} />);
  }
}
