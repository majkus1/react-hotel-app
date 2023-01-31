import { useEffect, useState, useRef } from 'react'
// import { useContext } from 'react'
// import ThemeContext from '../../../context/themeContext'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Searchbar(props) {
    const [term, setTerm] = useState('')
	// const themes = useContext(ThemeContext)
	const theme = useSelector(state => state.theme)
	const inputRef = useRef(null)
	const history = useHistory()

    const search = () => {
		// console.log('szukaj...', term)
		// props.onSearch(term)
		history.push(`/wyszukaj/${term}`)
	}

	const onKeyDownHandler = e => {
		if (e.key === 'Enter') {
			search()
			// props.onSearch()
		}
	}

	const focusInput = () => {
		inputRef.current.focus()
	}

	useEffect(() => {
		focusInput()
	}, [])

	return (
		<div className='d-flex'>
				<input
				    ref={inputRef}
				    value={term}
					onKeyDown={onKeyDownHandler} //onKeyDownHandler()
					onChange={e => setTerm(e.target.value)}
					className='form-control search'
					type='text'
					placeholder='Szukaj...'
				/>
			<button 
			onClick={search}
			className={`btn btn-${theme} bgcButton`}>
				Szukaj</button>
		</div>
	)
}

export default Searchbar
