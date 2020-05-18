import React, { Component } from 'react';
import './Chats.css';

const Chat = ({ message }) => {
	const { text, is_user_msg } = message;
	return <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>{text}</span>;
};

class Chats extends Component {
	constructor(props) {
		super(props);
		this.ChatsRef = React.createRef();
	}
	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	scrollToBottom = () => {
		this.ChatsRef.current.scrollTop = this.ChatsRef.current.scrollHeight;
	};

	render() {
		return (
			<div className="Chats" ref={this.ChatsRef}>
				{this.props.messages.map((message) => <Chat message={message} key={message.number} />)}
			</div>
		);
	}
}

export default Chats;
