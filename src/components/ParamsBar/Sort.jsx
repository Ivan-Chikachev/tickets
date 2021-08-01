import './ParamsBar.scss'

const Sort = ({onChange, sort}) => {
    return (
        <div className='sort'>
            <h4 className='sort__title'>Сортировать</h4>
            {sort.map(i =>
                <label className='sort__label' key={i.id}>
                    <input className='sort__input' type="radio" name={'sort'} onChange={() => onChange(i.id)}/>
                    - {i.label}
                </label>
            )}
        </div>
    )
}
export default Sort;
