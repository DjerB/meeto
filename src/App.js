import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import * as ROUTES from './constants/routes';

import Home from './views/home';
import Login from './views/login';
import Event from './views/event';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Events from './components/events';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={ROUTES.LOGIN}>
					<Login />
				</Route>
				<Route path={ROUTES.EVENT}>
					{Layout(Event)}
				</Route>
				<Route path={ROUTES.HOME}>
					{Layout(Home)}
				</Route>
			</Switch>
		</Router>
	);
}

const Layout = (View) => {
	return (props) => (
		<>
			<Navbar />
				<div style={{ padding: "2% 10%", background: "#F7F7F7 0% 0% no-repeat padding-box" }}>
					<View {...props} />
				</div>
			<Footer />
		</>
	);
}

export default App;
