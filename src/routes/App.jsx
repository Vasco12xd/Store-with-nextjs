/* //Les recomiendo esta extensión de react que es mas 
completa para los snippets si es que no les resulta 
el imr ocupen el comando “rafce” para crear el componente.*/
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import Home from "@pages/Home";
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import RecoveryPassword from '@pages/recoveryPassword';
import '@styles/global.css';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
	const initialState = useInitialState();
  return (
	<AppContext.Provider value={initialState}>
    <BrowserRouter>
	<Layout>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/login" element={<Login />} />			
      		<Route exact path="/recovery-password" element={<RecoveryPassword />} />
			<Route exact path="/send-email" element={<SendEmail />} />
			<Route exact path="/new-password" element={<NewPassword />} />
			<Route exact path="/account" element={<MyAccount />} />
			<Route exact path="/signup" element={<CreateAccount/>} />
			<Route exact path="/checkout" element={<Checkout/>} />
			<Route exact path="/orders" element={<Orders/>} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Layout>
</BrowserRouter> 
</AppContext.Provider>
  )
}

export default App