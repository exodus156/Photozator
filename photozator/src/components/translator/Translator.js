import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { updateTranslatedText } from '../../actions/UpdateActions';
import translateImageText from '../../actions/ThunksTranslateAction';
import "./Translator.css";

class Translator extends Component {
    render(){
        const TranslationSubmit = (e) =>{
            e.preventDefault();

            const langTo = this.transLanguage.value;

            const modal = M.Modal.getInstance(this.TranslationModal);
            modal.open();
            
            if (this.props.ImageText === ""){
                alert("Image text doesn't exist, therefore translation is unavalible.")
            } else{
                translateImageText(this.props.Key, this.props.ImageText, this.props.Language, langTo)
                    .then(response => response.json())
                    .then((result) => {
                        const text = result.text[0];
                        this.props.updateTranslatedText(text);
                        modal.close();
                    })
                    .catch(err => console.log(err));
            }
        }

        return(
            <form onSubmit={TranslationSubmit}>
                <div className="row">
                    <div className="col s12">
                        <h5 className="pink-text text-darken-2">Translation powered by <a href="http://translate.yandex.com/">Yandex.Translate</a></h5>
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light col s3 m4 l2 offset-s4 offset-m5 offset-l5 pink darken-2 teal-text text-lighten-4" type="submit" id="submitTranslateButton">Translate
                      <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="row">
                    <div className="input-field col s10 offset-s1 m3 offset-m1">
                        <textarea id="ImageText" className="materialize-textarea" value={this.props.ImageText} placeholder=" " disabled></textarea>
                        <label for="ImageText"><b>Text from image</b></label>
                    </div>

                    <div className="input-field col s6 offset-s3 m2 offset-m1">
                        <select ref={transLang => this.transLanguage = transLang}>
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
                            <option value="de">German</option>
                            <option value="el">Greek</option>
                            <option value="gu">Gujarati</option>
                            <option value="ht">Haitian</option>
                            <option value="he">Hebrew</option>
                            <option value="mrj">Hill Mari</option>
                            <option value="hi">Hindi</option>
                            <option value="hu">Hungarian</option>
                            <option value="is">Icelandic</option>
                            <option value="id">Indonesian</option>
                            <option value="ga">Irish</option>
                            <option value="it">Italian</option>
                            <option value="ja">Japanese</option>
                            <option value="jv">Javanese</option>
                            <option value="kn">Kannada</option>
                            <option value="kk">Kazakh</option>
                            <option value="km">Khmer</option>
                            <option value="ko">Korean</option>
                            <option value="ky">Kyrgyz</option>
                            <option value="lo">Laotian</option>
                            <option value="la">Latin</option>
                            <option value="lv">Latvian</option>
                            <option value="lt">Lithuanian</option>
                            <option value="lb">Luxembourgish</option>
                            <option value="mk">Macedonian</option>
                            <option value="mg">Malagasy</option>
                            <option value="ms">Malay</option>
                            <option value="ml">Malayalam</option>
                            <option value="mt">Maltese</option>
                            <option value="mi">Maori</option>
                            <option value="mr">Marathi</option>
                            <option value="mhr">Mari</option>
                            <option value="mn">Mongolian</option>
                            <option value="ne">Nepali</option>
                            <option value="no">Norwegian</option>
                            <option value="pap">Papiamento</option>
                            <option value="fa">Persian</option>
                            <option value="pl">Polish</option>
                            <option value="pt">Portuguese</option>
                            <option value="pa">Punjabi</option>
                            <option value="ro">Romanian</option>
                            <option value="ru">Russian</option>
                            <option value="gd">Scottish</option>
                            <option value="sr">Serbian</option>
                            <option value="si">Sinhala</option>
                            <option value="sk">Slovakian</option>
                            <option value="sl">Slovenian</option>
                            <option value="es">Spanish</option>
                            <option value="su">Sundanese</option>
                            <option value="sw">Swahili</option>
                            <option value="sv">Swedish</option>
                            <option value="tl">Tagalog</option>
                            <option value="tg">Tajik</option>
                            <option value="ta">Tamil</option>
                            <option value="tt">Tatar</option>
                            <option value="te">Telugu</option>
                            <option value="th">Thai</option>
                            <option value="tr">Turkish</option>
                            <option value="udm">Udmurt</option>
                            <option value="uk">Ukrainian</option>
                            <option value="ur">Urdu</option>
                            <option value="uz">Uzbek</option>
                            <option value="vi">Vietnamese</option>
                            <option value="cy">Welsh</option>
                            <option value="xh">Xhosa</option>
                            <option value="yi">Yiddish</option>
                        </select>
                        <label className="pink-text text-darken-2"><b>Translate to</b></label>
                    </div>

                    <div className="input-field col s10 offset-s1 m3 offset-m1">
                        <textarea id="TranslatedText" className="materialize-textarea" placeholder=" " value={this.props.TranslatedText} disabled></textarea>
                        <label for="TranslatedText"><b>Translated text</b></label>
                    </div>
                </div>

                <div className="modal" ref={modal => this.TranslationModal = modal}>
                    <div className="modal-content center-align teal lighten-4">
                        <h4 className="pink-text text-darken-2 modal-text">Translating image text...</h4>
                        <div className="preloader-wrapper active">
                          <div className="spinner-layer">
                            <div className="circle-clipper left">
                              <div className="circle"></div>
                            </div><div className="gap-patch">
                              <div className="circle"></div>
                            </div><div className="circle-clipper right">
                              <div className="circle"></div>
                            </div>
                          </div>
                        </div>
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