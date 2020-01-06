import React from "react";
import { Redirect } from "@reach/router";
import { connect, ConnectedProps } from 'react-redux';

type Props = ConnectedProps<typeof connector>

const NotFound: React.FunctionComponent<Props> = ({ 
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Redirect from="" to="/login" noThrow />
  }

  return <Redirect from="" to="/" noThrow />
};

const mapState = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const connector = connect(
  mapState,
)
export default connector(NotFound);