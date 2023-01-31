export default function LoadingButton(props) {
	// const className = props.className || 'btn-primary'
	const buttonProps = {...props}
	delete buttonProps.loading;
	
	return props.loading ? (
		<span className='spinner-border text-primary mt-2' role='status'>
			<span className='sr-only'></span>
		</span>
	) : (
		<button {...buttonProps} className='btn btn-primary mt-3'>{props.label}</button>
	)
}
