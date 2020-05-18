import React, { Component } from 'react';
import { setTypingValue, Send } from './Actions';
import store from './Store';
import './MessageInput.css';

const state = store.getState();
const handleChange = (e) => {
	e.preventDefault();
	store.dispatch(setTypingValue(e.target.value));
};
const handleSubmit = (e) => {
	e.preventDefault();
	const { typing, activeUsersId } = state;
	store.dispatch(Send(typing, activeUsersId));
};
const MessageInput = () => {
	const value = store.getState().typing;
	return (
		<form className="Message" onSubmit={handleSubmit}>
			<input type="text" onChange={handleChange} value={value} placeholder="Write a message" />
		</form>
	);
};
export default MessageInput;
