import { useReducer, lazy, Suspense, useEffect } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from '../Components/Layout/Header/Header'
import Menu from '../Components/Layout/Menu/Menu'
import Searchbar from '../Components/UI/Searchbar/Searchbar'
import Layout from '../Components/Layout/Layout'
import Footer from '../Components/Layout/Footer/Footer'
import ThemeButton from '../Components/UI/ThemeButton/ThemeButton'
import ThemeContext from '../context/themeContext'
import AuthContext from '../context/authContext'
import ReducerContext from '../context/reducerContext'
import InspiringQuote from '../Components/InspiringQuote/InspiringQuote'
import { reducer, intialState } from '../reducer'
import Home from '../page/home/Home'
import Hotel from '../page/hotel/Hotel'
import Search from '../page/search/search'
import NotFound from '../page/404/404'
import Login from '../page/Auth/Login'
import Register from '../page/Auth/Register'
import AuthenticatedRoute from '../hoc/AuthenticatedRoute'
import ErrorBoundary from '../hoc/ErrorBoundary'
import AddHotel from '../page/profile/MyHotels/AddHotel/AddHotel'
import EditHotel from '../page/profile/MyHotels/EditHotel/EditHotel'
const Profile = lazy(() => import('../page/profile/profile'))

function App() {
	// const [hotels, setHotels] = useState([])
	// const [loading, setLoading] = useState(true)
	// const [theme, setTheme] = useState('warning')
	// const [bgcBtn, setBgcBtn] = useState('primary')
	// const [isAuthenticated, setisAuthenticated] = useState(false)
	const [state, dispatch] = useReducer(reducer, intialState)

	return (
		<Router>
			<AuthContext.Provider
				value={{
					user: state.user,
					login: user => dispatch({ type: 'login', user }),
					logout: () => dispatch({ type: 'logout' }),
				}}>
				{/* <ThemeContext.Provider
					value={{
						theme: state.theme,
						bgcBtn: state.bgcBtn,
						onChangeTheme: () => dispatch({ type: 'change-theme' }),
						changeBgcolor: () => dispatch({ type: 'change-bgcbtn' }),
					}}> */}
					<ReducerContext.Provider
						value={{
							state: state,
							dispatch: dispatch,
						}}>
						<Layout
							header={
								<Header>
									<InspiringQuote />
									<Searchbar />
									<ThemeButton />
								</Header>
							}
							menu={<Menu />}
							content={
								<div>
									<ErrorBoundary>
										<Suspense fallback={<p>Ładowanie...</p>}>
											<Switch>
												<AuthenticatedRoute path='/profil/hotele/dodaj' component={AddHotel} />
												<AuthenticatedRoute path='/profil/hotele/edytuj/:id' component={EditHotel} />
												<AuthenticatedRoute path='/profil' component={Profile} />
												<Route path='/hotele/:id' component={Hotel} />
												<Route path='/wyszukaj/:term?' component={Search} />
												<Route path='/rejestracja' component={Register} />
												<Route path='/zaloguj' component={Login} />
												<Route exact={true} path='/' component={Home} />
												<Route component={NotFound} />
											</Switch>
										</Suspense>
									</ErrorBoundary>
								</div>
							}
							footer={<Footer />}
						/>
					</ReducerContext.Provider>
				{/* </ThemeContext.Provider> */}
			</AuthContext.Provider>
		</Router>
	)
}

export default App
