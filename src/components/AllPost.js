import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
	render() {
		//if editing is true, call EditComponent.  If not, call Post.
		return (
			<div>
				<h1>All Posts</h1>
				{this.props.posts.map((post) => (
					<div key={post.id}>
						{post.editing ? <EditComponent post={post} key={post.id} /> :
							<Post post={post} key={post.id} />}
					</div>
				))}
			</div>
		);
	}
}

//mapsStateToProps maps the redux state to...um...props.
const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps)(AllPost);