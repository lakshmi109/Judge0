import './App.css';
import Newsletter from './components/newsletter/Newsletter';
import Product from './components/products/Product';
import PricingContainer from './components/pricingcontainer/PricingContainer';
import Footer from'./components/Footer/Footer'
function App() {
  return (
    <>
      <Product />
      <Newsletter />
      <PricingContainer/>
      <Footer />
    </>
  );
}

export default App;
