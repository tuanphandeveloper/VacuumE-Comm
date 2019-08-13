import React, { Component } from 'react';
import { fetchCharities } from '../actions/charityActions';
import { setCharity } from '../actions/charityActions';
import {connect} from "react-redux";
import { Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
//import {charity} from '../components/charity';

//require a callback function to be sent to MovieList to update the header subtitle

class charityList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCharities());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setCharity(this.props.charities[selectedIndex]));
    }

    handleClick = (charity) => {
        const {dispatch} = this.props;
        dispatch(setCharity(charity));
    }

    render() {

        const CharityListCarousel= ({charityList}) => {
            if (!charityList) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {charityList.map((charity) =>
                    <Carousel.Item key={charity._id}>
                        <div>
                            <LinkContainer to={'/Charity/Get/'+charity.Name} onClick={()=>this.handleClick(charity)}>
                                <Image className="image" src={charity.imageUrl} thumbnail />
                            </LinkContainer>
                        </div>
                        <Carousel.Caption>
                            <h3>{charity.Name}</h3>
                            <h3>{charity.About}</h3>
                            <Glyphicon glyph={'usd'} /> {charity.Amount}
                        </Carousel.Caption>
                    </Carousel.Item>)}
            </Carousel>);
        }

        return (
            <CharityListCarousel charityList={this.props.charities} />
        );
    }
}

const mapStateToProps = state => {
    return {
        charities: state.charity.charities
    }
}

export default connect(mapStateToProps)(charityList);