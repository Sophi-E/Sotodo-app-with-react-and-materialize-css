import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  onChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="newtodo"
            value={this.state.content}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
