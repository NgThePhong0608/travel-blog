import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Navbar />
                <main>
                    <Routes></Routes>
                </main>
            </Router>
        </ChakraProvider>
    );
};

export default App;
