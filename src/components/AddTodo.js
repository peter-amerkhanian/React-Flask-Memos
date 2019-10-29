import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ title: e.target.value });

  render() {
    return (
      <Container className="mb-2 mt-1">
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            className="mb-1"
            type="text"
            name="title"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
            style= {{
              width: "50%",
              margin: "auto"
            }}
          />
          <Button
            style={{
              margin: "auto",
              display: "block"
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddTodo;
