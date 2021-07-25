import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface RepositoryState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState = {
	loading: false,
	error: null,
	data: []
}

let { 
	SEARCH_REPOSITORIES, 
	SEARCH_REPOSITORIES_SUCCESS, 
	SEARCH_REPOSITORIES_ERROR 
} = ActionType;

const reducer = (
	state: RepositoryState = initialState,
	action: Action
): RepositoryState => {
	switch (action.type) {
		case SEARCH_REPOSITORIES:
			return {
				loading: true,
				error: null,
				data: []
			}
		case SEARCH_REPOSITORIES_SUCCESS:
			return {
				loading: false,
				error: null,
				data: action.payload
			}
		case SEARCH_REPOSITORIES_ERROR:
			return {
				loading: false,
				error: action.payload,
				data: []
			}
		default:
			return state;
	}
}

export default reducer;