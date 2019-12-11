import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import history from '../services/history';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export default function CreateLink() {
  const [createLink, { data }] = useMutation(POST_MUTATION);
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  function onSubmit() {
    if (description !== '' && url !== '') {
      createLink({ variables: { description, url } });
      setDescription('');
      setUrl('');
      history.push('/');
    }
  }

  if (data) console.log(data);

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
