import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { actions } from '../../context';

type Props = ConnectedProps<typeof connector>

const Header: React.FunctionComponent<Props> = ({
  logout,
}) => {
  return (
    <div onClick={logout}>header</div>
  );
};

const mapState = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatch = ({
  ...actions.auth,
})

const connector = connect(
  mapState,
  mapDispatch
)
export default connector(Header);