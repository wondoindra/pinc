import React, { Component } from "react";
import axios from "axios";

class Memaxios extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let members = data.res.map(list => {
          return (
            <div key={list.data.id}>
              <h1>{list.data.first_name}</h1>
              <h1>{list.data.first_name}</h1>
            </div>
          );
        });
        this.setState({ members: members });
      });
  }

  render() {
    return <div>{this.state.members}</div>;
  }
}

export default Memaxios;
