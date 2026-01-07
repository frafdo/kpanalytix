/**
 * @file ErrorBoundary.jsx
 * @description Error boundary component to catch runtime errors
 */

import { Component } from 'react'
import Error from '../../pages/Error/Error'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return <Error error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
