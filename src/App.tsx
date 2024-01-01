// Import necessary components from react-router-dom
import { Route , Routes } from "react-router-dom";
// Import your components
import MainComponent from './Components/MainComponent';
import CartComponent from './Components/CartComponent';

// Define your routes using the Routes component
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </>
  );
}

export default App;
