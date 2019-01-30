import React, { Component } from 'react';

import { connect } from 'react-redux';

class EditComponent extends Component {
	handleEdit = (e) => {
		e.prevent.default();
		const newTitle = this.getTitle.value;
		const newMessage = this.getMessage.value;
		const data = {
			newTitle,
			newMessage
		}
		//In the tut this is "UPDATE" but changed to match exiting syntax a little better
		this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data:data })
	}

	render() {
		//This does not seem efficient to me, but going with it for now...
		return (
			<div key={this.props.post.id}>
				<form onSubmit={this.handleEdit}>
					<p><input required type="text" ref={(input) => this.getTitle = input}
						defaultValue={this.props.post.title} placeholder="Edit Post Title" /></p>
					<p><textarea required rows="5" ref={(input) => this.getMessage = input}
						defaultValue={this.props.post.message} cols="28" placeholder="Edit Post" /></p>
					<button>Update</button>
				</form>
			</div>
		);
	}
}

export default connect()(EditComponent);