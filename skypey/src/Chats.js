import React, { Component } from 'react';
import store from './Store';

//import { activeUsersId } from './Reducers/activeUsersId';
const Chat = ({ message }) => {
	const { text, is_user_msg } = message;
	return <span className={`Chat ${is_user_msg} ? "is-user-msg": ""}`}>{text}</span>;
};
class Chats extends Component {
	render() {
		const { messages } = this.props;
		return (
			<div className="Chats">{messages.map((message) => <Chat message={message} key={message.number} />)}</div>
		);
	}
}

export default Chats;
