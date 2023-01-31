import { useState } from "react"
import Input from "../../Components/input/input"
import { validate } from "../../helpers/validations"
import axios from '../../axiosauth'
import useAuth from "../../hooks/useAuth"
import { useHistory } from "react-router"

export default function Register(props) {
    const history = useHistory()
    const [auth, setAuth] = useAuth()
    const [form, setForm] = useState({
		email: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', 'email'],
		},
        password: {
			value: '',
			error: '',
			showError: false,
			rules: ['required'],
		},
    })

    const [error, setError] = useState('')
    const valid = !Object.values(form).map(input => input.error).filter(error => error).length

    const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value)

		setForm({ 
			...form, 
			[fieldName]: 
			{ ...form[fieldName], 
				value,
			    showError: true,
			    error: error 
			} 
		})
	}

    const submit = async e => {
		e.preventDefault()
		console.log(form)

        try {
        const res = await axios.post('/accounts:signUp', {
            email: form.email.value,
            password: form.password.value,
            returnSecureToken: true
        })
        setAuth({
			email: res.data.email,
			token: res.data.idToken,
			userId: res.data.localId,
		})
        history.push('/')
        console.log(res)
    } catch (ex) {
        // setError(ex.response.data.error.message)
        console.log(ex.response)
        if (ex.response.data.error.message === 'EMAIL_EXISTS') {
            setError('Email istnieje już w bazie danych')
        } else if (ex.response.data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
            setError('Hasło musi zawierać co najmniej 6 znaków')
        }
    }
	}

    if (auth) {
        history.push('/')
    }

    return (
        <div className='card'>
			<div className='card-header'>Rejestracja</div>
			<div className='card-body'>
				<form onSubmit={submit}>
					<h4>Uzupełnij dane</h4>

					<Input
						label='Email'
                        type="email"
						value={form.email.value}
						onChange={val => changeHandler(val, 'email')}
						error={form.email.error}
						showError={form.email.showError}
					/>

					<Input
						label='Hasło'
                        type="password"
						value={form.password.value}
						onChange={val => changeHandler(val, 'password')}
						error={form.password.error}
						showError={form.password.showError}
					/>

                   {error ? (
                    <div className="alert alert-danger mt-2">{error}</div>
                   ) : null}

					<div className='mt-3'>
						<button className='btn btn-success' disabled={!valid}>Zarejestruj</button>
					</div>
				</form>
			</div>
		</div>
    )
}