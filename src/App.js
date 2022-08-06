
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/Login';
import { useEffect } from 'react';
import Register from './Pages/Register/Register';

function App() {

  // useEffect(() => {
  //   // function fetchData(url) {


  //   // }
  //   // fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => console.log(data))
  //   //   .catch((error) => console.log(error))

  //   const hello = function () {
  //     return fetch(`https://jsonplaceholder.typicode.com/posts`)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error))
  //   }
  //   console.log(hello())
  // })
  return (

    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signUp' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
