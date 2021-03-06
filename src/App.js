import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnualReport from './components/AnualReport/AnualReport';
import ContactUs from './components/ContactUs/ContactUs';
import AddProduct from './components/Dashboard/AdminDashboard/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard//AdminDashboard/MakeAdmin';
import ManageOrders from './components/Dashboard/AdminDashboard/ManageOrders';
import ManageProducts from './components/Dashboard/AdminDashboard/ManageProducts';
import MyDashboard from './components/Dashboard/MyDashboard';
import MyProfile from './components/Dashboard/MyProfile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import InvestorRelations from './components/InvestorRelations/InvestorRelations';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Technologies from './components/Technologies/Technologies';
import MyOrders from './components/Dashboard/UserDashboard/MyOrders';
import AddReview from './components/Dashboard/UserDashboard/AddReview';
import Blogs from './components/Blogs/Blogs';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Payment from './components/Dashboard/Payment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/investorrelations' element={<InvestorRelations />}></Route>
        <Route path='/anualreport' element={<AnualReport />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/payment/:id' element={<Payment />}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route path='/dashboard' element={<MyDashboard />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='manageorders' element={<ManageOrders />}></Route>
          <Route path='addproduct' element={<AddProduct />}></Route>
          <Route path='manageproducts' element={<ManageProducts />}></Route>
          <Route path='makeadmin' element={<MakeAdmin />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
        </Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
