import Sort from "./Sort";
import StopsFilter from "./StopsFilter";
import PriceFilter from "./PriceFilter";
import './ParamsBar.scss'
import CompanyFilter from "./CompanyFilter";

const ParamsBar = ({
                       onSortChange, onStopsChange, stops, sort,
                       price, onPriceChange, stopsValue, companies,
                       onCompanyChange, companiesValue
                   }) => {
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
            <CompanyFilter
                onChange={onCompanyChange}
                companies={companies}
                value={companiesValue}
            />
        </div>
    )
}

export default ParamsBar;
