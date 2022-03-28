
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children : ReactNode
  fallbackUIComponent : ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {


  constructor(props : Props) {
    super(props)
    this.state = { hasError : false }
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log(`get derived state from error`)
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  
  render(): ReactNode {
    const { hasError } = this.state
    const { children, fallbackUIComponent} = this.props
    if (hasError) {
      return fallbackUIComponent;
    }

    return children
  }
}

export default ErrorBoundary