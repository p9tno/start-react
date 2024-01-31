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
                {name: 'Ddave', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Ice', salary: 1800, increase: true, rise: false, id: 2},
                {name: 'Lanzz', salary: 2800, increase: false, rise: false, id: 3},
            ],
            term: '', // состояние для поиска
            filter: 'all'
        }
        this.maxId = 4;
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

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        // console.log('id Increase: ', id);

        // 1-й способ
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     // console.log('index Increase:', index);
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr  = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map((item) => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
 
    }
    onToggleRise = (id) => {
        console.log('id Rise: ', id);
        this.setState(({data}) => ({
            data: data.map((item) => {
                if(item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))

    }

    // items - массив,  term - строка
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items; // если поле пустое вернеться массив данных
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1; //возвращем те элементы, которые прошли эту проверку
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise' : 
                return items.filter(item => item.rise); //if (item.rise)
                break; 
            case 'moreThen1000' : 
                return items.filter(item => item.salary > 1000); //if (item.rise)
                break; 
            default:
                return items;

        }
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }



    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        // скомбинируем фильтрацию  и поиск const visibleData = this.searchEmp(data, term)
        const visibleData =  this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    />
                <EmployeesAddForm
                    onAdd={this.addItem}
                    />
            </div>
        )
    }
    
}


export default App;