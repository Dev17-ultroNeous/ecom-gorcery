import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import Home from './page/home';
import Login from "./page/login";
import SignUp from "./page/signUp";
import ForgetPassword from "./page/forgetPassword";
import ResetPassword from "./page/resetPassword";
import Otp from "./page/otp";
import AllCategories from "./page/allCategories";
import AllProducts from "./page/allProducts";
import { allFruitData, allProductsData } from "./utils/allData";
import MyOrder from "./page/myOrder";
import ProductView from "./page/productView";
import FavoriteProducts from "./page/favoriteProducts";
import AddToCart from "./page/addToCart";
import { CartProvider } from "./componets/CartContext";
import CheckOut from "./page/checkOut";
import SuccesOrder from "./page/succesOrder";
import DeliveryAddress from "./page/deliveryAddress";
import ChangePassword from "./page/changePassword";
import OrderSummary from "./page/orderSummary";
import { useEffect } from "react";
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="otp" element={<Otp />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="allcategories" element={<AllCategories />} />
        <Route path="myorder" element={<MyOrder />} />
        <Route path="productview" element={<ProductView />} />
        <Route path="favorite" element={<FavoriteProducts />} />
        <Route path="addtocart" element={<AddToCart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="success" element={<SuccesOrder />} />
        <Route path="deliveryaddress" element={<DeliveryAddress />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="trackorder" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
