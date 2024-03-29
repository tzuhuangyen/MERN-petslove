import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/all.scss';
// import Home from './assets/pages/Home';
import Index from './assets/pages/Index';
import Header from './assets/pages/Header';
import Shop from './assets/pages/Shop';
import Blog from './assets/pages/Blog';
import Users from './assets/pages/Users';
import SignUp from './assets/pages/SignUp';
import Login from './assets/pages/Login';
import Member from './assets/pages/Member';
import Footer from './assets/pages/Footer';
import AdminIndex from './assets/pages/AdminIndex';
import AdminProducts from './assets/pages/AdminProducts';
import AdminProductUpload from './assets/pages/AdminProductUpload';
import AdminOrders from './assets/pages/AdminOrders';
import AdminAnalysis from './assets/pages/AdminAnalysis';
function App() {
  const [usersData, setUsersData] = useState([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const res = await fetch('http://localhost:8080/users');
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch');
  //       }
  //       const usersData = await res.json();
  //       setUsersData(usersData);
  //       console.log(usersData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //     }
  //   }
  //   getUsers();
  // }, []);

  return (
    <>
      <Header />

      <Routes basename='/MERN-petslove'>
        <Route exact path='/' element={<Index />} />

        {/* <Route path='/' element={<Index />} /> */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/signup' element={<SignUp />} />
        <Route path='/users/login' element={<Login />} />
        {/* <Route path="/favorite" element={<Favorite />} /> */}
        <Route path='/users/member' element={<Member />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/admin' element={<AdminIndex />}>
          <Route path='/admin/products' element={<AdminProducts />}></Route>

          <Route path='/admin/orders' element={<AdminOrders />}></Route>
          <Route path='/admin/analysis' element={<AdminAnalysis />}></Route>
        </Route>
        <Route
          path='/admin/products/uploadProduct'
          element={<AdminProductUpload />}
        ></Route>
      </Routes>

      <Footer />
      {/* <div className='container-lg'>
        <h2>all users' data for backend admin</h2>
        <ul>
          {usersData.map((user) => (
            <li key={user._id}>
              <p>user ID:{user._id}</p>
              <p>username:{user.username}</p>
              <p>user password:{user.password}</p>
              <br />
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
