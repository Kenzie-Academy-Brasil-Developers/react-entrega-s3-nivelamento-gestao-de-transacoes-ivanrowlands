import './App.css';
import { useState } from 'react';
import DisplayAll from "./components/DisplayAll";
import DisplayChanges from "./components/DisplayChanges"
import DisplayRegistration from "./components/DisplayRegistration"
import DisplayTotalFruits from "./components/DisplayTotalFruits"

function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <main className="App">
      <div className="Central">   
      <DisplayRegistration setFruits={setProducts} fruits={products} />
      <DisplayChanges fruits={products} />
      <DisplayAll fruits={products} />
      <DisplayTotalFruits fruits={products} />
      </div>
    </main>
  );
}

export default App;
