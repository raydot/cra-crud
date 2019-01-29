import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {

	//Connetct the PostForm component to the store so we can dispatch actions
	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;
		const data = {
			id: new Date(),
			title,
			message
		}
		//console.log(data);
		this.props.dispatch({
			type:'ADD_POST', 
			data
		});
		this.getTitle.value='';
		this.getMessage.value='';
	}
	render() {
		return (
			<div>
				<h1>Create Post</h1>
				<form onSubmit={this.handleSubmit}>
					<p><input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Post Title" /></p>
					<p><textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" placeholder="Enter Post" /></p>
					<p><button>Post</button></p>
				</form>
			</div>
		);
	}
}

export default connect()(PostForm);