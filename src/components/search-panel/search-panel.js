import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    // создаем новый метод onUpdateSearch, можно было его достать из props, делаем правильно 
    // для синхронизации input с локальным стейтом. Передакм на вверх и тут

    onLoculUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onLoculUpdateSearch}
                    />
        )

    }
}

export default SearchPanel;