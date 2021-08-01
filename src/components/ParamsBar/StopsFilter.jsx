const StopsFilter = ({value, stops, onChange}) => {
    const getCountTransfer = (i) => {
        if (i === 0) return 'Без пересадок'
        if (i === 1) return '1 Пересадка'
        if (i >= 2) return `${i} Пересадки`
    }
    return (
        <div className="filter">
            <h4 className='filter__title'>Фильтровать</h4>
            {stops.map(i =>
                <label className='filter__label' key={i}>
                    <input
                        onChange={onChange}
                        checked={value.includes(i)}
                        value={i}
                        type="checkbox"
                        className='filter__input'/>
                    {getCountTransfer(i)}
                </label>
            )}
        </div>
    )
}

export default StopsFilter;
