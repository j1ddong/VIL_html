import './css/button.css';

function Button({ text, monthChange }) {
	return (
		<>
			<button className='btn' onClick={monthChange}>
				{text}
			</button>
		</>
	);
}

export default Button;
