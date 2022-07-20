import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route,
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
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="otp" element={<Otp />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="allcategories" element={<AllCategories />} />
        <Route path="allvegitable" element={<AllProducts list={allProductsData} name='vegitable' />} />
        <Route path="allfruits" element={<AllProducts list={allFruitData} name='Fruits' />} />
        <Route path="allsnacks" element={<AllProducts list={allFruitData} name='Snacks' />} />
      </Routes>
    </>
  );
}

export default App;
