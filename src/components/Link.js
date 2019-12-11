import React from 'react';

// import { Container } from './styles';

export default function Link({ link }) {
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
}
