import Home_Screen from './Home_Screen';
import Summary from './Summary';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <>
                <Home_Screen />
                <Routes>
                    <Route path="/summary" element={<Summary/>}></Route>
                </Routes>
            </>



        </Router>

    );
}

export default App;
