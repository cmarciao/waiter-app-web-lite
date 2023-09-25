import { GlobalStyles } from './styles/GlobalStyles';
import { ToastContainer } from './components/Toast/ToastContainer';
import { Router } from './Router';

export function App() {
    return (
        <>
            <GlobalStyles />

            <Router />
            <ToastContainer />
        </>
    );
}
