import { createStore } from 'redux'

export const intialState = {
	theme: 'primary',
	bgcBtn: 'warning',
	user: JSON.parse(window.localStorage.getItem('token-data')) ?? null,
	onChangeTheme: () => {},
    changeBgcolor: 'warning'
}

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'warning' ? 'primary' : 'warning'
			return {
				...state,
				theme,
			}
		case 'change-bgcbtn':
			return {
				...state,
				bgcBtn: state.bgcBtn === 'primary' ? 'warning' : 'primary',
			}
		case 'login':
			return {
				...state,
				user: action.user,
			}
		case 'logout':
			return {
				...state,
				user: null,
			}
		default:
			return state
	}
}

const store = createStore(reducer)

export default store