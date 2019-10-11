import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardContent, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    textFields: {
        margin: '10px 10px 10px 30px',
        width: '300px'
    },
    messageInput: {
        margin: '10px 10px 10px 30px',
        width: '645px'
    },
    saveButton: {
        color: 'white',
        backgroundColor: 'orange',
        margin: '10px 10px 10px 30px',
    },
    stateZipPhone: {
        margin: '10px 0px 10px 30px'
    }
})

class SignupForm extends Component {
        
    state = {
        name: '',
        role_id: this.props.roleId,
        start_time: '', 
        end_time: '',
        comments: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        state: '',
        zip_code: ''
    }


    //SET STATE WITH VOLUNTEER INFORMATION
    handleChange = (propertyName, event) => {
        this.setState ({
            [propertyName]: event.target.value,
            start_time: this.props.role.start_time,
            end_time: this.props.role.end_time
        })
        console.log(this.state);  
    }


    handleAddVolunteer = (id) => {
        console.log('sign up button was clicked');
        this.props.dispatch({
            type: 'VOLUNTEER_SIGNUP',
            payload: this.state
        })
        // SWEET ALERT: THANKS FOR SIGNING UP. SOMEONE WILL CONTACT YOU -- YOU WILL RECIEVE AN EMAIL?
        // CLEAR FIELDS
        this.setState ({
            name: '',
            role_id: this.props.roleId,
            start_time: '',
            end_time: '',
            comments: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: ''
        })
    }


    render () {




        return (


            <div>
                {/* {JSON.stringify(this.state)} */}
                <CardContent>
                    <h3>Sign me up!</h3>
                    <TextField className={this.props.classes.textFields} type="text" placeholder="Full Name" variant="outlined" label="Full Name"
                                value={this.state.name} onChange={(event) => this.handleChange('name', event)} />
                    <TextField className={this.props.classes.textFields} type="text" placeholder="email" variant="outlined" label="email" 
                        value={this.state.email} onChange={(event) => this.handleChange('email', event)} />
                    <br />
                    <TextField className={this.props.classes.textFields} type="text" placeholder="address" variant="outlined" label="address"
                        value={this.state.address} onChange={(event) => this.handleChange('address', event)} />
                    <TextField className={this.props.classes.textFields} type="text" placeholder="city" variant="outlined" label="city" 
                        value={this.state.city} onChange={(event) => this.handleChange('city', event)} />
                    <br />
                    <TextField className={this.props.classes.stateZipPhone} type="text" placeholder="state" variant="outlined" label="state"
                        value={this.state.state} onChange={(event) => this.handleChange('state', event)} />
                    <TextField className={this.props.classes.stateZipPhone} type="text" placeholder="zipcode" variant="outlined" label="zip code"
                        value={this.state.zip_code} onChange={(event) => this.handleChange('zip_code', event)}/>
                    {/* <br /> */}
                    <TextField className={this.props.classes.stateZipPhone} type="text" placeholder="phone number" variant="outlined" label="phone number"
                        value={this.state.phone_number} onChange={(event) => this.handleChange('phone_number', event)} />
                    <br />
                    <TextField className={this.props.classes.messageInput} type="text"
                        placeholder="Let us know your needs. Can you volunteer for more or less hours than needed? Do you have questions?"
                        variant="outlined" label="Message" multiline rows={4}
                        value={this.state.comments} onChange={(event) => this.handleChange('comments', event)} /><br />
                    <Button variant="contained" className={this.props.classes.saveButton}
                            onClick={this.handleAddVolunteer} >Sign Up!</Button>
                </CardContent>
                {/* {JSON.stringify(this.props.roles)} */}
                
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        role: reduxStore.volunteer.specificRole
    }
}


export default withStyles(styles) (connect(mapStateToProps) (SignupForm));