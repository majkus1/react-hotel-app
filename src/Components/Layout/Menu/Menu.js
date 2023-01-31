import styles from './Menu.module.css'
import useAuth from '../../../hooks/useAuth'
import { NavLink } from 'react-router-dom'

function Menu() {
	// const auth = useContext(AuthContext)
	const [auth, setAuth] = useAuth()

	const logout = e => {
		e.preventDefault()
		// auth.logout()
		setAuth(false)
	}

	// style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}

	return (
		<div className={`${styles.menuContainer} breadcrumb`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<NavLink exact to='/' style={{ color: 'white' }} activeStyle={{ color: 'gold' }}>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={styles.menuItem}>
							<NavLink to='/profil' style={{ color: 'white' }} activeStyle={{ color: 'gold' }}>
								Mój profil
							</NavLink>
						</li>
						<li className={styles.menuItem}>
							<a href='#section' onClick={logout}>
								Wyloguj
							</a>
						</li>
					</>
				) : (
					<>
						<li className={styles.menuItem}>
							<NavLink to='/rejestracja' style={{ color: 'white' }} activeStyle={{ color: 'gold' }}>
								Zarejestruj
							</NavLink>
						</li>
						<li className={styles.menuItem}>
							<NavLink to='/zaloguj' style={{ color: 'white' }} activeStyle={{ color: 'gold' }}>
								Zaloguj
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	)
}

export default Menu
