export const reducer = (state, action) => {
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
			throw new Error('Nie ma takiej akcji...' + action.type)
	}
}


export const intialState = {
	theme: 'warning',
	bgcBtn: 'primary',
	user: JSON.parse(window.localStorage.getItem('token-data')) ?? null
}