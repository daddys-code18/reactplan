// import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Plain";

import React, { Component } from "react";
import Plain from "./Plain";

export default class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({
        items: items,
        text: "",
      });
    }
  };
  handleDelete = (id) => {
    console.log("deleted", id);
    const olditems = [...this.state.items];
    console.log("olditems", olditems);
    const items = olditems.filter((elemnt, i) => {
      return i !== id;
    });
    console.log("Newitems", items);
    this.setState({ items: items });
  };
  render() {
    return (
      <div className="container-fluid my-5 ">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg p-3 text-white">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9 text-center">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Write Plan  Here"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2 text-center">
                <button
                  className="btn btn-warning px-5 font-weight-bold  "
                  onClick={this.handleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled   row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plain
                        key={i}
                        sendData={this.handleDelete}
                        id={i}
                        value={value}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
