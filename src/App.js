import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
// import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';
import './App.css';

function App() {
	const user = useSelector((state) => state.authReducer.authData);
	return (
		<div className='App'>
			<div className='blur blur__1'></div>
			<div className='blur blur__2'></div>
			<Routes>
				<Route
					path='/'
					element={user ? <Navigate to='home' /> : <Navigate to='auth' />}
				/>
				<Route
					path='/home'
					element={user ? <Home /> : <Navigate to='../auth' />}
				/>
				<Route
					path='/auth'
					element={user ? <Navigate to='../home' /> : <Auth />}
				/>
			</Routes>
		</div>
	);
}

export default App;
