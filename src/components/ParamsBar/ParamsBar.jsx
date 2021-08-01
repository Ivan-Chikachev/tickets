import Sort from "./Sort";
import StopsFilter from "./StopsFilter";
import PriceFilter from "./PriceFilter";
import './ParamsBar.scss'

const ParamsBar = ({onSortChange, onStopsChange, stops, sort, price, onPriceChange, stopsValue}) => {
    return (
        <div className='params-bar'>
            <Sort
                sort={sort}
                onChange={onSortChange}/>
            <StopsFilter
                stops={stops}
                onChange={onStopsChange}
                value={stopsValue}
            />
            <PriceFilter value={price} onChange={onPriceChange}/>
        </div>
    )
}

export default ParamsBar;
