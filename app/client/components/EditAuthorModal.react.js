import React from 'react';
import { Modal } from 'react-bootstrap';
import BookElement from './BookElement.react.js'

export default class EditAuthorModal extends React.Component {

    state = {
        name: this.props.author.name,
        surname: this.props.author.surname,
        books: this.props.author.books
    };

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onSurnameChange = (event) => {
        this.setState({
            surname: event.target.value
        });
    };

    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Author editing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Surname: </label>
                            <input type="text" className="form-control" value={this.state.surname} onChange={this.onSurnameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Books: </label>
                            <select className="form-control">
                                {this.state.books.map((book, index) => {
                                    return <option value={book.title} key={index}>{book.title}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={() => {
                                this.props.updateAuthor(
                                this.props.author.surname,
                                {
                                    name: this.state.name,
                                    surname: this.state.surname,
                                    books: this.state.books
                                });
                                this.props.hideModal();
                            }
                        }>
                            Update
                        </button>
                        <button className="btn btn-default" onClick={this.props.hideModal}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}