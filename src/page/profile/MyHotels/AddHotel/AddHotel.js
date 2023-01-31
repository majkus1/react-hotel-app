import axios from '../../../../axios'
import { useHistory } from 'react-router'
import HotelForm from '../EditHotel/HotelForm'
import useAuth from '../../../../hooks/useAuth'

const AddHotel = props => {
	const [auth] = useAuth()
	const history = useHistory()

	const submit = async form => {
		await axios.post(`/hotels.json?auth=${auth.token}`, form)
		history.push('/profil/hotele')
	}

	return (
		<div className='card'>
			<div className='card-header'>Dodaj</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane hotelu</p>
				<HotelForm buttonText='Dodaj!' onSubmit={submit} />
			</div>
		</div>
	)
}

export default AddHotel
