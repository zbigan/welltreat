import React, { ReactNode } from "react";

interface Props {
  children: ReactNode,
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }

  override componentDidCatch(_error: unknown, _errorInfo: unknown) {
    // TODO log error info
  }

  override render() {
    if (this.state.hasError) {
      // TODO add styling to error boundary
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
