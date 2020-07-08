import {ADD_COMMENT,DEL_COMMENT} from "./action-types";

const initValue=[
			{username:'jack',content:'I love rose',id:1},
			{username:'rose',content:'I love jack',id:2}
		]

function comments(previousState=initValue,action){
	switch (action.type){
		case ADD_COMMENT :
		return [action.data,...previousState];
		case DEL_COMMENT :
		return previousState.filter(comment=>comment.id!==action.data);
		default :
		return previousState
	}
}

export default comments;