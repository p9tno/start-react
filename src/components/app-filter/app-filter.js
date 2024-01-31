import "./app-filter.css";

function AppFilter(props) {
    const butonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$ '},
    ];
    const butons = butonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => {props.onFilterSelect(name)}}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {butons}
            {/* <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button> */}
        </div>
    );
}

export default AppFilter;