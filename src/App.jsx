import React,{Component} from 'react';
import AddComment from './component/add-comment';
import CommentList from './component/comment-list';

export default class App extends Component{
	state={
		comments:[
			{username:'jack',content:'I love rose',id:1},
			{username:'rose',content:'I love jack',id:2}
		]
	};
	updateComment=(comment)=>{
		const {comments}=this.state
		this.setState({
			comments:[{...comment,id:comments.length+1},...comments]
		})
	};
	// 定义删除指定id的元素的方法
	delComment=(id)=>{
		this.setState({
			comments:this.state.comments.filter(item=>item.id!==id)//保留return为true的元素
		})
	}
	render(){
		const {comments}=this.state;
		return (
			<div>
				<header className="site-header jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>请发表对React的评论</h1>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<AddComment updateComment={this.updateComment}/>
					<CommentList comments={comments} delComment={this.delComment}/>
				</div>
  </div>
		)
	}
}
