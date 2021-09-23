import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ auth, children, ...rest }) {
    return (
        <Route
        {...rest}
        render={({ location }) =>
            auth.isAuthenticated ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}

PrivateRoute.propTypes = {
    auth: PropTypes.object,
    children: PropTypes.object
}

export default PrivateRoute;