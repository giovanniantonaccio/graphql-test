import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LinkList from '../components/LinkList';
import CreateLink from '../components/CreateLink';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LinkList} />
      <Route path="/create" component={CreateLink} />

      {/* redirect user to LinkList page if route does not exist and user is not authenticated */}
      <Route component={LinkList} />
    </Switch>
  );
}
