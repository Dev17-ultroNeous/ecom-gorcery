import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './componets/Home';
import Sliders from "./componets/Slider";
import Categories from "./componets/Categories";
import Products from "./componets/Products";
function App() {
  return (
    <>
      <Home />
      <Sliders />
      <Categories />
      <Products />
    </>
  );
}

export default App;
