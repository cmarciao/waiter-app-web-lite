import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { ToastContainer } from './components/Toast/ToastContainer';

export function App() {
    return (
        <>
            <GlobalStyles />

            <Header />
            <Orders />
            <ToastContainer />
        </>
    );
}
