import React, {Component} from "react";
import {subscribe} from "pubsub-js";
import CommentItem from '../comment-item';
// import PropTypes from 'prop-types';
export default class CommentList extends Component {
/* 	static propTypes={
		comments:PropTypes.array.isRequired
			}; */
	state={
		comments:[
			{username:'jack',content:'I love rose',id:1},
			{username:'rose',content:'I love jack',id:2}
		]
	}; 
	// 定义删除指定id的元素的方法
	delComment = (id) => {
		this.setState({
			comments: this.state.comments.filter(item => item.id !== id) //保留return为true的元素
		})
	};
	componentDidMount(){
		// 不会影响初始化渲染速度，能够保证先订阅，再发布;订阅只能一次，发布可以多次
		let id = this.state.comments.length;
		subscribe('ADD_COMMENT',(msg,data)=>{
			// 更新状态
			this.setState({
				comments:[{...data,id:++id},...this.state.comments]
			})
		})
	}
	render() {
		const {comments}=this.state;
		const isDisplay = comments.length?'none':'block'
		return (
				<div className="col-md-8">
						<h3 className="reply">评论回复：</h3>
						<h2 style={{display:isDisplay}}>暂无评论，点击左侧添加评论！！！</h2>
						<ul className="list-group">
						{
							comments.map((item)=><CommentItem comment={item} key={item.id} delComment={this.delComment}/>)
						}
						</ul>
				</div>
		)
	}
}