import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateImageText from '../../actions/UpdateActions';
import getImageText from '../../actions/ThunksImageAction';

class Photo extends Component {
    render(){
        /* getImageText()
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); */
            console.log(this.props.Key);

        return(
            <h4>hey</h4>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Key: state.OCR_Key,
        Text: state.ImageText
    }
}

export default connect(mapStateToProps)(Photo);