const TransferFilter = () => {
    return (
        <div className="filter">
            <h4 className='filter__title'>Фильтровать</h4>
            <label className='filter__label'>
                <input type="checkbox" className='filter__input'/>
                1 пересадка
            </label>
            <label className='filter__label'>
                <input type="checkbox" className='filter__input'/>
                Без пересадок
            </label>
        </div>
    )
}

export default TransferFilter;
