import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data}) {
    // console.log(d ata);
    const elements = data.map( item => {
        return <EmployeesListItem 
                key={item.id}
                name={item.name} 
                salary={item.salary}
                increase={item.increase}/>

        return <EmployeesListItem {...item}/>

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