import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { updateTranslatedText } from '../../actions/UpdateActions';
import translateImageText from '../../actions/ThunksTranslateAction';
import "./Translator.css";

class Translator extends Component {
    render(){
        return(
            <h1>test</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        Key: state.YANDEX_Key,
        ImageText: state.ImageText,
        TranslatedText: state.TranslatedText,
        Language: state.Language
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateTranslatedText: (translatedText) => {dispatch(updateTranslatedText(translatedText))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Translator);