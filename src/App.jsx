import './App.scss';
import {useEffect, useState} from "react";
import ticketAPI from "./api/api";

function App() {
    const [searchId, setSearchId] = useState('')
    const [tickets, setTickets] = useState([])

    useEffect(async () => {
        const id = await ticketAPI.getSearchId()
        setSearchId(id.data.searchId)
    }, [])

    useEffect(async ()=>{
        const res = await ticketAPI.getTickets(searchId)
        setTickets(res.data.tickets)
    }, [searchId])

    return (
        <div className="App">

        </div>
    );
}

export default App;
