import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import { Page } from '../primitives/layout';
import { H1 } from '../primitives/typography';

const List = ({ list }) => (
  <Fragment>
    <Nav />
    <Page>
      <H1>{list.label}</H1>
    </Page>
  </Fragment>
);

export default List;