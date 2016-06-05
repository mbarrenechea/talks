'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.user_list && this.props.user_list.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.job}</td>
                                <td><Link to={`/detail/${row.id}`}>Detail</Link></td>
                                <td><Link to={`/detail/${row.id}`}>Detail</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>;
        }
};

export default Home;
