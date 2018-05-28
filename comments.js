import { ADD_COMMENT } from "./actions";
import { EDIT_COMMENT } from "./actions";
import { DELETE_COMMENT } from "./actions";
import { THUMB_UP } from "./actions";
import { THUMB_DOWN } from "./actions";

export const comments = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return [
				{
					id: action.id,
					text: action.text,
					votes: 0
				},
				...state
			];
		case REMOVE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id);	
		case EDIT_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {
						...comment,
						text: action.text
					};
				}
				return comment;
			});
		case THUMB_UP:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {
						...comment,
						votes: comment.votes + 1
					};
				}
				return comment;
			});
		case THUMB_DOWN:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {
						...comment,
						votes: comment.votes - 1
					};
				}
				return comment;
			});
		default:
			return state;
	}
};

const initialState = [];
