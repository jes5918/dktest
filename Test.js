import React from "react";

function Greeter({ user }) {
  return <div>Hello {user}</div>;
}

class App extends React.Component {
  render() {
    return <Greeter user="Admin" />;
  }
}
