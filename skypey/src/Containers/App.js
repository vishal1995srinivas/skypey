import React from 'react';
import './App.css';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import store from '../Store';
import _ from 'lodash';
//import '../components/SideBar.css';

const { contact, User, activeUsersId } = store.getState();
//console.log(store.getState());
function App() {
	return (
		<div className="App">
			<SideBar contacts={_.values(contact)} />
			<Main user={User} activeUsersId={activeUsersId} />
		</div>
	);
}

export default App;
