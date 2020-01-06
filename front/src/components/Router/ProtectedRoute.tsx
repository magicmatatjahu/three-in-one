import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { connect, ConnectedProps } from 'react-redux';

type Props = RouteComponentProps & ConnectedProps<typeof connector> & {
  pageComponent: React.ComponentType,
}

const ProtectedRoute: React.FunctionComponent<Props> = ({ 
  pageComponent: PageComponent,
  isAuthenticated,
  ...rest
}) => {
  if (!isAuthenticated) {
    return <Redirect from="" to="/login" noThrow />
  }

  return <PageComponent {...rest} />;
};

const mapState = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const connector = connect(
  mapState,
)
export default connector(ProtectedRoute);