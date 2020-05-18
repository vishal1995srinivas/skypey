import React, { Component } from 'react';
import { setTypingValue, Send } from '../Actions';
import store from '../Store';
import './MessageInput.css';

// const state = store.getState();
const MessageInput = ({ value }) => {
	const state = store.getState();
	const handleChange = (e) => {
		//e.preventDefault();
		store.dispatch(setTypingValue(e.target.value));
	};
	const handleSubmit = (e, value, activeUser) => {
		e.preventDefault();
		const { typing, activeUsersId } = state;
		store.dispatch(Send(value, activeUser));
	};
	return (
		<form className="Message" onSubmit={handleSubmit}>
			<input className="Message__input" onChange={handleChange} value={value} placeholder="Write a message" />
		</form>
	);
};
export default MessageInput;
