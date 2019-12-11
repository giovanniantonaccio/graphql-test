import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import client from "./services/apollo";

import TodoList from "./components/TodoList";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <TodoList></TodoList>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
