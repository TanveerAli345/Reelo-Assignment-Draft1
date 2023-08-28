import Select from 'react-select'

function Dropdown({ name, label, options, sendValue, styles, filters }) {
    console.log(filters)
    return(

        <Select defaultValue={filters.year ? { value: filters.year, label: filters.year } : null} className='select' placeholder={label} options={options} styles={styles} onChange={e => sendValue(e, name)} />
    )    
}

export default Dropdown 