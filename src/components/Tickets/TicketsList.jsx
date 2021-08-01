import TicketItem from "./TicketItem";
import './Tickets.scss'

const TicketsList = ({setCountShowMore, tickets}) => {
    const showMore = () => {
        setCountShowMore(count => count + 2)
    }
    return (
        <div className='tickets-list'>
            {tickets.map(i =>
                <TicketItem key={i.price}
                            carrier={i.carrier}
                            price={i.price}
                            segments={i.segments}/>
            )}
            <div className="btn-block">
                {tickets.length
                    ?
                    <button className="btn btn--show-more" onClick={showMore}>
                        Показать еще
                    </button>
                    :
                    <div>
                        По вашим параметрам ничего не найдено
                    </div>
                }
            </div>
        </div>
    )
}

export default TicketsList;
