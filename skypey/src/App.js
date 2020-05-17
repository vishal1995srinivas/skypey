import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Main from './Main';
import store from './Store';

const { contacts } = store.getState();
function App() {
	return (
		<div className="App">
			<SideBar contacts={contacts} />
			<Main />
		</div>
	);
}

export default App;
