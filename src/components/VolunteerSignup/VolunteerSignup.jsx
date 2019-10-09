import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Card, CardContent, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SignupForm from '../SignupForm/SignupForm';

const styles = theme => ({
    rootDiv: {
        margin: '0px 100px 0px 100px'
    },
    heading: {
        color: '#714723'
    },
    backButton: {
        float: 'left',
        color: 'white',
        backgroundColor: '#457736',
    },
    doneButton: {
        float: 'right',
        color: 'white',
        backgroundColor: '#457736',
        margin: '0px 330px 0px 0px'
    },
    logo: {
        height: '80px',
    },
    nonprofitInfo: {
        display: 'inline-block',
        padding: '20px',
    }
})


class VolunteerSignup extends Component {

    componentDidMount() {
        this.getRoles();

    }

    //REVISIT THE WIREFRAME AND DATABASE TO MAKE SURE PROPERTIES MATCH
    state = {


    }

    getRoles = () => {
        console.log('get roles id');
        this.props.dispatch({
            type: 'GET_EVENT_DETAILS',
            payload: this.props.match.params.id
        })
    }


    handleBackButton = (id) => {
        console.log('back button was clicked');
        //ADD SWEETALERT
        this.props.history.push(`/organizationHome/${id}`) 
    }

    handleDoneButton = () => {
        console.log('done button was clicked');
        //ADD SWEETALERT: YOURE DONE! OR SOMETHING SIMILAR
        this.props.history.push(`/organizationHome`)
    }


    render () {



        return (

            // REMOVE CARDS WHEN DONE
            <div className={this.props.classes.rootDiv} >
                <h1 className={this.props.classes.heading} >Volunteers Sign Up</h1>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {/* <Card> */}
                            <CardContent>
                            
                                <h3>nonprofit information and logo goes here</h3>
                                <div className={this.props.classes.nonprofitInfo} >
                                    <img className={this.props.classes.logo} src={this.props.user.logo} alt=""/>
                                </div>
                                <div className={this.props.classes.nonprofitInfo} >     
                                    <>
                                    <p>{this.props.user.name}<br />
                                        {this.props.user.address}<br />
                                        {this.props.user.city}, MN {this.props.user.zip_code} </p>
                                     </>
                                </div>
                            </CardContent>
                        {/* </Card> */}
                    </Grid>

                    <Grid item xs={12}>
                        {/* <Card> */}
                            <CardContent>
                                <h3>signup information goes here</h3>
                                {this.props.event.map(item => (
                                    <>
                                    <span>Event: {item.description}</span><br/>
                                    <span>Date: {item.start_date} - {item.end_date}</span><br/>
                                    <span>Locatioan: {item.address}</span><br/>
                                    <span>{item.city}, {item.state} {item.zip_code}</span><br/>
                                    </>
                                ))}
                                <h4>Volunteers Needed Role (3)</h4>
                                <h5>Date: </h5>
                                <h5>Time: </h5>
                                <h5>Description: </h5>
                            </CardContent>
                        {/* </Card> */}
                    </Grid>

                    <Grid item xs={12}>
                        <SignupForm />
                    </Grid>

                    <Grid item xs={12}>
                        {/* <Card> */}
                            <CardContent>
                                <h3>volunteers added goes here</h3>
                            </CardContent>
                        {/* </Card> */}
                    </Grid>

                    <Grid item xs={12}>
                        {/* <Card> */}
                            <CardContent>
                                {/* <h3>back and done buttons here</h3> */}
                                <Button className={this.props.classes.backButton} variant="contained" 
                                    onClick={this.handleBackButton} >back</Button>
                                <Button className={this.props.classes.doneButton} variant="contained"
                                    onClick={this.handleDoneButton} >Done</Button>
                            </CardContent>
                        {/* </Card> */}
                    </Grid>

                </Grid>

                {/* {JSON.stringify(this.props.event)}
                {JSON.stringify(this.props.user)} */}
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        event: reduxStore.event.eventDetails,
        user: reduxStore.user
    }
}



export default withStyles(styles) (connect(mapStateToProps) (VolunteerSignup));