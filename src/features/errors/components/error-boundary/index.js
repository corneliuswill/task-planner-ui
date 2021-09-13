import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log('Error', error);
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
      console.log('Error', `${error} - ${errorInfo} - ${Date.now()}`)
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div><h1>Something went wrong.</h1></div>;
      }

      return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}

export default ErrorBoundary;
