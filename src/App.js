import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' exact element={<ProductListing />} />
					<Route path='/product/:productId' element={<ProductDetail />} />
					<Route>404 Not Found!</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;