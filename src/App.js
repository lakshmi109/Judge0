import './App.css';
import Newsletter from './components/newsletter/Newsletter';
import Product from './components/products/Product';
import PricingContainer from './components/pricingcontainer/PricingContainer';

function App() {
  return (
    <>
      <Product />
      <Newsletter />
      <PricingContainer/>
    </>
  );
}

export default App;
