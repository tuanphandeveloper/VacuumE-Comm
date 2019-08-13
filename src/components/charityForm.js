import React, { Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {submitCharity} from "../actions/charityActions";
import { connect } from 'react-redux';
//import DropdownInput from 'react-dropdown-input';
import { Dropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Select from 'react-select';
import {withRouter} from "react-router-dom";
import {submitTransaction} from "../actions/TransactionActions";

class CharityForm extends Component {

    constructor() {
        super();

        this.updateDetails = this.updateDetails.bind(this);
        this.addCharity = this.addCharity.bind(this);
        this.state = {
            details: {
                Name: '',
                About: '',
                imageUrl: ''
            }
        };
    }

    updateDetails(event) {
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }


    addCharity() {
        const {dispatch} = this.props;
        dispatch(submitCharity(this.state.details));
    }


    render() {

        return (
            <Form horizontal>
                <FormGroup controlId="Name">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.Name} type="text"
                                     placeholder="Name"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="About">
                    <Col componentClass={ControlLabel} sm={2}>
                        About:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.About} type="text"
                                     placeholder="About"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="imageUrl">
                    <Col componentClass={ControlLabel} sm={2}>
                        Image:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.imageUrl} type="text"
                                     placeholder="imageUrl"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.addCharity}>Submit</Button>
                    </Col>
                </FormGroup>

            </Form>
        );

    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transaction.transactions
    }
};

export default connect(mapStateToProps)(CharityForm);


