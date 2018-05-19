export const ADD_COMMENT = 'ADD COMMENT';
export const EDIT_COMMENT = 'EDIT COMMENT';
export const DELETE_COMMENT = 'DELETE COMMENT';
export const THUMB_UP = 'THUMB UP';
export const THUMB_DOWN = 'THUMB DOWN';

// ADD COMMENT
const addComment = text => {
	return {
		type: ADD_COMMENT,
		text: 'add comment',
		id: uuid.v4()
	}
};
const boundAddComment = text => dispatch(addComment(text));

// EDIT COMMENT
const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text: 'edit comment',
		id: uuid.v4()
	}
};
const boundEditComment = (text, id) => dispatch(editComment(text. id));

//DELETE COMMENT
const deleteComment = (text, id) => {
	return {
		type: DELETE_COMMENT,
		text: 'delete comment',
		id: uuid.v4()
	}
};
const boundDeleteComment = (text, id) => dispatch(deleteComment(text, id));

//THUMB UP
const thumbUp = (id, likes) => {
	return {
		type: THUMB UP,
		text: 'thumb up',
		id: uuid.v4(),
		likes: ++likes
	}
};
const boundThumbUp = (id, likes) => dispatch(thumbUp(id, likes));

//THUMB DOWN
const thumbDown = (id, dislikes) => {
	return {
		type: THUMB DOWN,
		text: 'thumb down',
		id: uuid.v4(),
		dislikes: --dislikes
	}
};
const boundThumbDown = (id, dislikes) => dispatch(thumbDown(id, likes));