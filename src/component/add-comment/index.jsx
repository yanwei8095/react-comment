import React,{Component} from "react";
import PropTypes from 'prop-types';
export default class AddComment extends Component{
		static propTypes = {
			updateComment: PropTypes.func.isRequired
		};
	state={
		username:'',
		content:''
	}
	addComment=()=>{
		// 收集表单数据
		const {username,content}=this.state;
		if(!username||!content){
			alert('用户名和评论内容不能为空');
			return;
		}
		// 添加数据
		this.props.updateComment({username,content});
		// 清空输入框
		this.setState({username:'',content:''})
	};
	change=(name)=>{
		return (e)=>{
			this.setState({
				[name]:e.target.value
			})
		}
	}
	render(){
		const {username,content}=this.state;
		return(
			<div className="col-md-4">
						<form className="form-horizontal">
							<div className="form-group">
								<label>用户名</label>
								<input type="text" className="form-control" value={username} placeholder="用户名" onChange={this.change('username')}/>
							</div>
							<div className="form-group">
								<label>评论内容</label>
								<textarea className="form-control" rows="6"value={content}  placeholder="评论内容" onChange={this.change('content')}/>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									<button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
								</div>
							</div>
						</form>
					</div>
		)
	}
}