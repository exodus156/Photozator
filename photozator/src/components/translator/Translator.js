import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { updateTranslatedText } from '../../actions/UpdateActions';
import translateImageText from '../../actions/ThunksTranslateAction';
import "./Translator.css";

class Translator extends Component {
    render(){
        return(
            <form /*onSubmit={TranslationSubmit}*/>
                <div className="row">
                    <div className="col s12">
                        <h5 className="pink-text text-darken-2">Translation powered by <a href="http://translate.yandex.com/">Yandex.Translate</a></h5>
                    </div>
                </div>
                <div className="row">

                    <div className="input-field col s12 m3 offset-m1">
                        <textarea id="ImageText" className="materialize-textarea" disabled></textarea>
                        <label for="ImageText">Text from image</label>
                    </div>

                    <div className="input-field col s6 offset-s3 m2 offset-m1">
                        <select>
                            <option value="af" selected>Afrikaans</option>
                            <option value="sq">Albanian</option>
                            <option value="am">Amharic</option>
                            <option value="ar">Arabic</option>
                            <option value="hy">Armenian</option>
                            <option value="az">Azerbaijan</option>
                            <option value="ba">Bashkir</option>
                            <option value="eu">Basque</option>
                            <option value="be">Belarusian</option>
                            <option value="bn">Bengali</option>
                            <option value="bs">Bosnian</option>
                            <option value="bg">Bulgarian</option>
                            <option value="my">Burmese</option>
                            <option value="ca">Catalan</option>
                            <option value="ceb">Cebuano</option>
                            <option value="zh">Chinese</option>
                            <option value="hr">Croatian</option>
                            <option value="cs">Czech</option>
                            <option value="da">Danish</option>
                            <option value="nl">Dutch</option>
                            <option value="en">English</option>
                            <option value="eo">Esperanto</option>
                            <option value="et">Estonian</option>
                            <option value="fi">Finnish</option>
                            <option value="fr">French</option>
                            <option value="gl">Galician</option>
                            <option value="ka">Georgian</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className="input-field col s12 m3 offset-m1">
                        <textarea id="TranslatedText" className="materialize-textarea" disabled></textarea>
                        <label for="TranslatedText">Translated text</label>
                    </div>

                </div>            
            </form>
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