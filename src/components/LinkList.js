import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Link from './Link.js';

const TODOS = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

export default function LinkList() {
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
}
