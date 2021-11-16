import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                // console.log(res.data[1])
                let persons = res.data;
                this.setState({persons})
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(user =>
                        <li>{user.id + ': ' + user.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Users;