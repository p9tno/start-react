import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data}) {
    // console.log(data);
    const elements = data.map( item => {
        // вариант 1
        return <EmployeesListItem 
                key={item.id}
                name={item.name} 
                salary={item.salary}
                increase={item.increase}/>

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