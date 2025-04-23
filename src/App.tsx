import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppNavbar from './components/common/AppNavbar';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1">
                <AppNavbar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;