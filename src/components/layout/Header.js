import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  );
}

const headerStyle = {
  background: "linear-gradient(#a7a7a7, #646464)",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  borderRadius: "2px"
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}