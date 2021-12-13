
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import Header from './Header';
import Home from './Home'
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider.js";
import Login from "./Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider'

export default function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  

  

  return (
    <StateProvider initialState={ initialState } reducer={ reducer }>
    <BrowserRouter>
    
      <Routes>
        
      <Route path='/' element={<div><Header /><Home /></div>}>
      
      
        
         </Route>
         <Route path="/login" element={<Login />}>
 
</Route>
      </Routes>
    </BrowserRouter>
    </StateProvider>

                     
  );
  

  
}

ReactDOM.render(<App />, document.getElementById("root"));

