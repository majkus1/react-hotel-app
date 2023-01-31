import { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'

export default function LoadingIcon(props) {
	const themes = useContext(ThemeContext)
	return (
		<div className='d-flex justify-content-center'>
			<div className={`spinner-border m-5 text-${themes.theme}`} role='status'>
				<span className='sr-only'></span>
			</div>
		</div>
	)
}
