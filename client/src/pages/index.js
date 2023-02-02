import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Initiatives from './initiatives';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Initiatives path="/" />
    </Router>
  );
}
