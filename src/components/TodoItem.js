import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <Form.Check
            style={{
              display: "inline"
            }}
            className="mr-2"
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <Button
            variant="danger"
            size="sm"
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            <b>x</b>
          </Button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  border: "none",
  cursor: "pointer",
  float: "right"
};
