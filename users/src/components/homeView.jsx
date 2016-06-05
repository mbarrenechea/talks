'use strict';

import React from 'react';
import {Link} from 'react-router';

class HomeView extends React.Component {

    componentWillMount() {
        this.props.getUsersList();
    }

    render() {
        return <div>
                <h2>Home</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
                            <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.user_list && this.props.user_list.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.job}</td>
                                <td><Link to={`/users/${row.id}`}>Show</Link></td>
                                <td><Link to={`/users/edit/${row.id}`}>Edit</Link></td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>;
        }
};

export default HomeView;
