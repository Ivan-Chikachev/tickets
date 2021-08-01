import TicketItem from "./TicketItem/TicketItem";

const TicketsList = ({tickets}) => {
    return (
        <div>
            {tickets.map(i =>
                <TicketItem key={i.price} i={i}/>
            )}
        </div>
    )
}

export default TicketsList;
