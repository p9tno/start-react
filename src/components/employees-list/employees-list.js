import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data, onDelete}) {
    // console.log(data);
    const elements = data.map( item => {
        // вариант 1
        return <EmployeesListItem 
                    key={item.id}
                    name={item.name} 
                    salary={item.salary}
                    increase={item.increase}
                    onDelete={() => onDelete(item.id)} 
                />

        // вариант 2  если не нужен key
        // return <EmployeesListItem {...item}/>
        
        // вариант 3
        // const {id, ...itemProps} = item;
        // return <EmployeesListItem key={id} {...itemProps}/>
    })

    // console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;