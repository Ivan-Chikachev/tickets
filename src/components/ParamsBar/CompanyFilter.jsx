import {getCompanyName} from "../../functions/functions";

const CompanyFilter = ({value, companies, onChange}) => {


    return (
        <div className="filter">
            <h4 className='filter__title'>Авиакомпании</h4>
            {companies.map(i =>
                <label className='filter__label' key={i}>
                    <input
                        onChange={onChange}
                        checked={value.includes(i)}
                        value={i}
                        type="checkbox"
                        className='filter__input'/>
                    {getCompanyName(i)}
                </label>
            )}
        </div>
    )
}

export default CompanyFilter;
