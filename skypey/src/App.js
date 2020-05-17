import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Main from './Main';
import store from './Store';
import _ from 'lodash';
import './SideBar.css';

const { contact } = store.getState();
function App() {
	return (
		<div className="App">
			<SideBar contacts={_.values(contact)} />
			<Main />
		</div>
	);
}

export default App;
