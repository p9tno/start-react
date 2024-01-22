import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ddave', salary: 800, increase: false, id: 1},
                {name: 'Ice', salary: 1800, increase: true, id: 2},
                {name: 'Lanzz', salary: 2800, increase: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        console.log(id);
        this.setState(({data}) => {

            // 1-й способ
            // const index = data.findIndex(elem => elem.id === id);
            // console.log(index);
            // const before = data.slice(0,index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];


            return {
                // 1-й способ
                // data: newArr

                // 2-й способ
                data: data.filter(item => item.id !== id)
            }
        })
    }



    render() {
        const {data} = this.state;
        
    
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        )
    }
    
}


export default App;