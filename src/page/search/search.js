import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from '../../axios'
import { objectToArrayWithId } from "../../helpers/objects"
import Hotels from "../../Components/Hotels/Hotels"

export default function Search(props) {

    const { term } = useParams()
    const [ hotels, setHotels ] = useState([])

    const search = async () => {
		// const newHotels = [...backendHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
        try {
            const res = await axios.get('/hotels.json')
            const newHotels = objectToArrayWithId(res.data).filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()))
            setHotels(newHotels)
          } catch (ex) {
              console.log(ex.response)
          }
	}

    useEffect(() => {
        search()
    }, [term])

    return (
        <div>
            <h2>Wyniki wyszukiwania dla frazy "{term}":</h2>
            <Hotels hotels={hotels} />
        </div>
    )
}