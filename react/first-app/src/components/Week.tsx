import './css/week.css';

function Week({ weekInfo }) {
	return (
		<div className='week'>
			{weekInfo.map((day, idx) => (
				<div className={!day && 'hidden'} key={idx}>
					{day}
				</div>
			))}
		</div>
	);
}

export default Week;
