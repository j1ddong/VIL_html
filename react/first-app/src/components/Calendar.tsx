import { useRef, useState } from 'react';
import { DateTime } from 'luxon';
import './css/calendar.css';
import Button from './Button';
import DayOfWeek from './DayOfWeek';
import Week from './Week';

function Calendar() {
	const dateTime = useRef(DateTime.local({ locale: 'En' }));
	const [month, setMonth] = useState(dateTime.current.c.month);

	const getWeeks = () => {
		const resultWeeks = [];
		const startDay = dateTime.current.startOf('month').weekdayShort;
		let startDayNum = 0;
		switch (startDay) {
			case 'Mon':
				startDayNum = 1;
				break;
			case 'Tue':
				startDayNum = 2;
				break;
			case 'Wed':
				startDayNum = 3;
				break;
			case 'Thu':
				startDayNum = 4;
				break;
			case 'Fri':
				startDayNum = 5;
				break;
			case 'Sat':
				startDayNum = 6;
				break;
		}
		let oneWeekInfo = [];
		for (let day = 0; day < startDayNum; day++) {
			oneWeekInfo.push(0);
		}
		let dayOfWeekNum = startDayNum;

		for (let day = 1; day <= dateTime.current.daysInMonth; day++) {
			oneWeekInfo.push(day);
			dayOfWeekNum++;
			if (dayOfWeekNum === 7) {
				resultWeeks.push(oneWeekInfo);
				oneWeekInfo = [];
				dayOfWeekNum = 0;
			}
		}
		for (let day = dayOfWeekNum; day < 7; day++) {
			oneWeekInfo.push(0);
		}
		resultWeeks.push(oneWeekInfo);
		return resultWeeks;
	};

	const weeksInfo = getWeeks();

	const nextMonthCalendar = () => {
		const nextDateTimeObj = dateTime.current.plus({ month: 1 });
		setMonth(nextDateTimeObj.c.month);
		dateTime.current = nextDateTimeObj;
	};
	const preMonthCaldendar = () => {
		const preDateTimeObj = dateTime.current.plus({ month: -1 });
		setMonth(preDateTimeObj.c.month);
		dateTime.current = preDateTimeObj;
	};

	return (
		<>
			<header className='calendarHead'>
				<Button text='<' monthChange={preMonthCaldendar}></Button>
				<p className='calendarTitle'>
					{dateTime.current.year} {month}
				</p>
				<Button text='>' monthChange={nextMonthCalendar}></Button>
			</header>

			<DayOfWeek />
			{weeksInfo.map((weekInfo, idx) => (
				<Week key={idx} weekInfo={weekInfo}></Week>
			))}
		</>
	);
}

export default Calendar;
