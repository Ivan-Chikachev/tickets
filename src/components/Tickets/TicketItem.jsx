import {format} from 'date-fns';

const TicketItem = ({carrier, price, segments}) => {

    const ticket = segments[0]
    const ticket2 = segments[1]

    const {duration, date, stops} = ticket
    const {duration: duration2, date: date2, stops: stops2} = ticket2

    const getTime = (dur) => {
        const hour = Math.floor(dur / 60);
        const min = dur - (hour * 60);
        return [hour, min]
    }
    const [hour, min] = getTime(duration)
    const [hour2, min2] = getTime(duration2)

    const getFormatDate = (date) => {
        return [
            format(new Date(date), 'HH:mm'),
            format(new Date(date), 'd MMM, e')
        ]
    }
    const [startTime, startDate] = getFormatDate(date)
    const [startTime2, startDate2] = getFormatDate(date2)

    const startToEnd = (date, duration) => {
        const newDate = new Date(date)
        return newDate.getTime() + duration * 1000 * 60
    }

    const endTime = format(new Date(startToEnd(date, duration)), 'HH:mm')
    const endDate = format(new Date(startToEnd(date, duration)), ' d MMM, e')

    const endTime2 = format(new Date(startToEnd(date2, duration2)), 'HH:mm')
    const endDate2 = format(new Date(startToEnd(date2, duration2)), ' d MMM, e')

    const getCountTransfer = (i) => {
        if (i === 0) return "Без пересадок"
        if (i === 1) return '1 Пересадка'
        if (i >= 2) return `${i} Пересадки`
    }
    return (
        <div className='ticket'>
            <div className="ticket__header">
                <div className='ticket__logo'>
                    <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Logo"/>
                </div>
                <div>
                    <h3 className="ticket__price">{price} Р</h3>
                    <p>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <div className="ticket__city">
                {`${ticket.origin} - ${ticket.destination}`}
            </div>
            <div className="ticket__duration date">
                <div className="date__origin">
                    <span>{startTime}</span>
                    <span className='date__time'>{startDate}</span>
                </div>
                <div className="date__duration">
                    {`${hour} ч ${min} м`}
                </div>
                <div className="date__destination">
                    <span className='date__time'>{endDate}</span>
                    <span>{endTime}</span>
                </div>
            </div>
            <div className="ticket__stops-block">
                <span className='ticket__stops'> {getCountTransfer(stops.length)}</span>
            </div>
            <div className="line"></div>
            <div className="ticket__city">
                {`${ticket2.origin} - ${ticket2.destination}`}
            </div>
            <div className="ticket__duration date">
                <div className="date__origin">
                    <span>{startTime2}</span>
                    <span className='date__time'>{startDate2}</span>
                </div>
                <div className="date__duration">
                    {`${hour2} ч ${min2} м`}
                </div>
                <div className="date__destination">
                    <span className='date__time'>{endDate2}</span>
                    <span>{endTime2}</span>
                </div>
            </div>
            <div className="ticket__stops-block">
                <span className='ticket__stops'> {getCountTransfer(stops2.length)}</span>
            </div>
            <button className="btn btn--choose">
                Выбрать
            </button>
        </div>
    )
}

export default TicketItem;
