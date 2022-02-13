import {
    Component,
    ReactNode
} from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: any;
}

class LoadingErrorBoundary extends Component<Props, State> {
    public state = {
        hasError: false,
        error: null
    };

    static getDerivedStateFromError( error: any ) {
        return {
            hasError: true,
            error
        };
    }

    render() {
        if ( this.state.hasError ) {
            return <p>There was an error</p>;
        }

        return this.props.children;
    }
}

export default LoadingErrorBoundary;
