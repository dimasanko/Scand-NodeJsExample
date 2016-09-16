import React from 'react';
import AuthorRow from './AuthorRow.react'

export default class AuthorTable extends React.Component {

    static propTypes = {
        authors: React.PropTypes.arrayOf(React.PropTypes.shape(
            {
                surname: React.PropTypes.string.isRequired
            }
        )).isRequired
    };


    render() {
        var rows = [];
        this.props.authors.forEach((author) => {
            rows.push(<AuthorRow author={author} key={author.surname} />);
        });
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Books</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}