import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data, onDelete, onToggleIncrease, onToggleRise}) {
    // console.log(data);
    const elements = data.map( item => {
        // console.log(item);
        // вариант 1
        // return <EmployeesListItem 
        //             key={item.id}
        //             name={item.name} 
        //             salary={item.salary}
        //             increase={item.increase}
        //             rise={item.rise}
        //             onDelete={() => onDelete(item.id)} 
        //             onToggleIncrease={() => onToggleIncrease(item.id)} 
        //             onToggleRise={() => onToggleRise(item.id)} 
        //         />

        // вариант 2  если не нужен key
        // return <EmployeesListItem {...item}/>
        
        // вариант 3
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)} 
            onToggleIncrease={() => onToggleIncrease(id)} 
            onToggleRise={() => onToggleRise(id)} 
        />
    })

    // console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;