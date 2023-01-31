import { useContext } from 'react'
import { Route, Redirect } from 'react-router'
import reducerContext from '../context/reducerContext'

export default function AuthenticatedRoute(props) {
	const context = useContext(reducerContext)
	return context.state.user ? <Route {...props}></Route> : <Redirect to='/zaloguj' />
}
