import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
class contact extends Component {

    state = {
        showContactInfo: false,
    }

    onDeleteClick = async (id, dispatch) => {

        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

            dispatch({ type: 'DELETE_CONTACT', payload: id });
        } catch (e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        }






    };

    onShowClick = () => {

        this.setState({
            showContactInfo: !this.state.showContactInfo,
        })

    }


    render(props) {

        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="container">
                            <div className="card card-body mb-3">
                                <h4>{name}<i onClick={this.onShowClick} className="fa fa-sort-down" style={{ cursor: 'pointer' }} />

                                    <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }} />

                                    <Link to={`contact/edit/${id}`}>
                                        <i
                                            className="fa fa-pencil"
                                            style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }} />
                                    </Link>

                                </h4>
                                {showContactInfo ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">Email:{email}</li>
                                        <li className="list-group-item">Phone:{phone}</li>
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    )
                }
                }
            </Consumer >
        )
    }

}
export default contact;
