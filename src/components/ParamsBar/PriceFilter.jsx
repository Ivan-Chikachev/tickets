const PriceFilter = ({value, onChange}) => {
    return (
        <div className='price'>
            <h4 className='price__title'>Цена</h4>
            <div className="price__input-block">
                От
                <input value={value[0]}  onChange={onChange} type="text" className="price__input" data-index={'0'}/>
            </div>
            <div className="price__input-block">
                До
                <input value={value[1]} onChange={onChange} type="text" className="price__input" data-index={'1'}/>
            </div>
        </div>
    )
}

export default PriceFilter;
