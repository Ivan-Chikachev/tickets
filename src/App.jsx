import './App.scss';
import {useEffect, useMemo, useState} from "react";
import ticketAPI from "./api/api";
import ParamsBar from "./components/ParamsBar/ParamsBar";
import TicketsList from "./components/Tickets/TicketsList";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
    const sortState = [
        {label: 'по возрастанию цены', id: 'priceUp', status: false},
        {label: 'по убыванию цены', id: 'priceDown', status: false},
        {label: 'по времени в пути', id: 'time', status: false}
    ]

    const [searchId, setSearchId] = useState('')
    const [tickets, setTickets] = useState([])
    const [countShowMore, setCountShowMore] = useState(2)
    const [currentTickets, setCurrentTickets] = useState([])
    const [sort, setSort] = useState(sortState)
    const [stop, setStop] = useState([])
    const [company, setCompany] = useState([])
    const [price, setPrice] = useState(['', '']);
    const [isLoad, setIsLoad] = useState(true)
    const [isError, setIsError] = useState(false)

    const stops = useMemo(() => [...new Set(tickets.map(n => n.segments[0].stops.length))],
        [tickets]).sort((prev, next) => prev - next)

    const companies = useMemo(() => [...new Set(tickets.map(n => n.carrier))],
        [tickets])

    useEffect(() => {
        async function fetchData() {
            try {
                const id = await ticketAPI.getSearchId()
                setSearchId(id.data.searchId)
            } catch (e) {
                setIsLoad(false)
                setIsError(true)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                if (searchId) {
                    const res = await ticketAPI.getTickets(searchId)
                    setTickets(res.data.tickets)
                    setIsLoad(false)
                }
            } catch (e) {
                setIsLoad(false)
                setIsError(true)
            }
        }

        fetchData()
    }, [searchId])

    useEffect(() => {
        if (sort[0].status) setTickets(tickets.sort((prev, next) => prev.price - next.price))
        if (sort[1].status) setTickets(tickets.sort((prev, next) => next.price - prev.price))
        if (sort[2].status) setTickets(tickets.sort((prev, next) =>
            next.segments[0].duration - prev.segments[0].duration))
    }, [sort])

    useEffect(() => {
        const filtredTickets = tickets.filter(i => (
            (!company.length || company.includes(i.carrier)) &&
            (!stop.length || stop.includes(i.segments[0].stops.length)) &&
            (!price[0] || price[0] <= i.price) &&
            (!price[1] || price[1] >= i.price)
        ));
        const newTickets = filtredTickets.slice(0, countShowMore)
        setCurrentTickets(newTickets)
    }, [countShowMore, tickets, sort, stop, price, company])

    const onStopsChange = ({target: {checked, value}}) => {
        setStop((!stop.includes(value) && checked)
            ? [...stop, Number(value)]
            : stop.filter(n => n !== Number(value))
        );
    };
    const onCompanyChange = ({target: {checked, value}}) => {
        setCompany((!company.includes(value) && checked)
            ? [...company, value]
            : company.filter(n => n !== value)
        );
    };

    const onSortChange = (id) => {
        setSort(state => {
            return state.map(i => {
                if (i.id === id) i.status = true
                if (i.id !== id) i.status = false
                return i
            })
        })
    }

    const onPriceChange = ({target: {value, dataset: {index}}}) => {
        setPrice(price.map((n, i) => i === +index ? value : n));
    };

    return (
        <div className="wrapper">
            <div className="container">
                {isLoad && <Loader/>}
                {isError ? <Error/> :
                    <div className="app">
                        <ParamsBar price={price}
                                   onPriceChange={onPriceChange}
                                   sort={sort}
                                   onSortChange={onSortChange}
                                   stops={stops}
                                   stopsValue={stop}
                                   onStopsChange={onStopsChange}
                                   onCompanyChange={onCompanyChange}
                                   companiesValue={company}
                                   companies={companies}
                        />
                        <TicketsList setCountShowMore={setCountShowMore}
                                     tickets={currentTickets}/>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
