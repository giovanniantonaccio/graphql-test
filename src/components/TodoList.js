import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const TODOS = gql`
  {
    allTodoes {
      id
      text
      createdAt
    }
  }
`;

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);

  function getTodos() {
    return data.allTodoes.map(({ id, text, createdAt }) => {
      return (
        <li key={id}>
          {text} ---> {id} ---> {createdAt}
        </li>
      );
    });
  }

  // function addTodo() {

  // }

  return (
    <>
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={() => console.log("click")}>Add</button>
      <ul>{getTodos()}</ul>
    </>
  );
}
