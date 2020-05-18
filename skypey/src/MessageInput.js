import React, { Component } from 'react';
import { setTypingValue } from './Actions';
import store from './Store';

const handleChange = (e) => {
	store.dispatch(setTypingValue(e.target.value));
};

const MessageInput = () => {
	const value = store.getState().typing;
	return (
		<form className="Message">
			<input type="text" onChange={handleChange} value={value} placeholder="Write a message" />
		</form>
	);
};

export default MessageInput;
