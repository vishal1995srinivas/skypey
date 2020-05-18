import React, { Component } from 'react';
import { setTypingValue, Send } from './Actions';
import store from './Store';
import './MessageInput.css';

const state = store.getState();
const handleChange = (e) => {
	e.preventDefault();
	store.dispatch(setTypingValue(e.target.value));
};
const handleSubmit = (e, value, activeUser) => {
	e.preventDefault();
	store.dispatch(Send(value, activeUser));
	//console.log(value, activeUser);
};
const MessageInput = () => {
	const value = store.getState().typing;
	let activeUser = store.getState().activeUsersId;
	return (
		<form className="Message" onSubmit={(e) => handleSubmit(e, value, activeUser)}>
			<input type="text" onChange={handleChange} value={value} placeholder="Write a message" />
			<input type="submit" />
		</form>
	);
};
export default MessageInput;
