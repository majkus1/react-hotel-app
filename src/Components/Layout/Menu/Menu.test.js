import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import Menu from './Menu'

describe('Menu Component', () => {
	test('renders Zaloguj is user is null', () => {
		render(
			<Router>
				<Menu />
			</Router>
		)
		const link = screen.getByText(/zaloguj/i)
		expect(link).toBeInTheDocument()
	})
	test('renders Wyloguj if user exists', () => {
		render(
			<AuthContext.Provider
				value={{
					user: { email: 'email@test.pl' },
					login: () => {},
					logout: () => {},
				}}>
				<Router>
					<Menu />
				</Router>
			</AuthContext.Provider>
		)
		const link = screen.getByText(/Wyloguj/i)
		expect(link).toBeInTheDocument()
	})
})
