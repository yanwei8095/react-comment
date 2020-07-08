import React,{Component} from "react";
import PropTypes from 'prop-types';

export default class CommentItem extends Component{
	static propTypes={
		comment:PropTypes.object.isRequired,
		delComment:PropTypes.func.isRequired
	};
	deleteComment= () => {
		// 获取当前点击元素的id
		const {id,username}=this.props.comment;
		if (window.confirm(`您确认要删除${username}的评论吗?`)) {
			// 调用App中的方法,删除评论
			this.props.delComment(id)
		}
	}
	render(){
		const {comment:{username,content}}=this.props
		return(
				<li className="list-group-item">
					<div className="handle">
						<button style={{border:'none',backgroundColor:'rgba(0,0,0,0)',outline:'none'}} onClick={this.deleteComment}>删除</button>
					</div>
					<p className="user"><span >{username}</span><span>说:</span></p>
					<p className="centence">{content}</p>
				</li>
		)
	}
}