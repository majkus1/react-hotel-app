import { useContext } from 'react'
// import ThemeContext from '../../../context/themeContext'
import { useSelector } from 'react-redux'

const Footer = props => {
	// const themes = useContext(ThemeContext)
	const theme = useSelector(state => state.theme)
	return <div className={`text-center m-3 text-${theme}`}>Noclegi 2023</div>
}

export default Footer
