import React, { Component } from 'react';
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }


    onSubmit = async (dispatch, e) => {
        const { name, email, phone } = this.state;
        e.preventDefault();

        //check field errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }


        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }



        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);


        dispatch({ type: 'ADD_CONTACT', payload: res.data });

        this.setState({
            //clearing state after contact gets added
            name: "",
            email: "",
            phone: '',
            errors: {}
        });

        this.props.history.push('/');


    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });




    render() {
        const { name, email, phone, errors } = this.state;


        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}

                                    />




                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}

                                    />


                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}

                                    />


                                    <button type="submit" className="btn btn-light btn-block">Submit</button>
                                </form>
                            </div>

                        </div>


                    )
                }
                }
            </Consumer >
        )






    }
}


export default AddContact;
