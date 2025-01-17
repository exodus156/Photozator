import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { updateImageText, updateImage } from '../../actions/UpdateActions';
import getImageText from '../../actions/ThunksImageAction';
import "./Photo.css";

class Photo extends Component {
    componentDidMount() {
        /* Initialize materialize element */
        document.addEventListener('DOMContentLoaded', function() {
            var FormElems = document.querySelectorAll('select');
            var FormInstances = M.FormSelect.init(FormElems);

            var ModalElems = document.querySelectorAll('.modal');
            var ModalInstances = M.Modal.init(ModalElems, {dismissible: false});
          });
    }
    render(){
        const submitImage = (e) => {
            e.preventDefault();

            const lang = this.language.value;

            const modal = M.Modal.getInstance(this.ImageModal);
            modal.open();

            let reader = new FileReader();
            reader.onload = () =>{
                let dataURL = reader.result;
                this.props.updateImage(dataURL, lang);
            };

            reader.readAsDataURL(this.image.files[0]);            
            
            setTimeout(()=>{
                getImageText(this.props.Key, this.props.Image, this.props.Language)
                    .then(response => response.json())
                    .then(result => {
                        let text = result.ParsedResults[0].ParsedText;
                        const fixedText = text.replace(/\r\n/g, " ")
                        this.props.updateImageText(fixedText);                                              
                        modal.close();
                    })
                    .catch(error => console.log('error', error));
            }, 500);
        }

        return(
            <form onSubmit={submitImage}>
                <div className="row">
                    <div className="file-field input-field col s10 l4 offset-s1 offset-l1">
                        <div className="btn pink darken-2 teal-text text-lighten-4">
                            <span>Image</span>
                            <input type="file" id="imageInput" accept="image/*" required ref={input => this.image = input}/>
                        </div>
                        <div className="file-path-wrapper center-align">
                            <input className="file-path pink-text text-darken-2 validate" type="text" placeholder="Upload image for text extraction." />
                        </div>
                    </div> 
                    <div className="input-field col s6 l4 offset-s3 offset-l2">
                      <select ref={lang => this.language = lang}>
                        <option value="ara">Arabic</option>
                        <option value="bul">Bulgarian</option>
                        <option value="chs">Chinese (Simplified)</option>
                        <option value="cht">Chinese (Traditional)</option>
                        <option value="hrv">Croatian</option>
                        <option value="cze">Czech</option>
                        <option value="dan">Danish</option>
                        <option value="dut">Dutch</option>
                        <option value="eng" selected>English</option>
                        <option value="fin">Finnish</option>
                        <option value="fre">French</option>
                        <option value="ger">German</option>
                        <option value="gre">Greek</option>
                        <option value="hun">Hungarian</option>
                        <option value="kor">Korean</option>
                        <option value="ita">Italian</option>
                        <option value="jpn">Japanese</option>
                        <option value="pol">Polish</option>
                        <option value="por">Portuguese</option>
                        <option value="rus">Russian</option>
                        <option value="slv">Slovenian</option>
                        <option value="spa">Spanish</option>
                        <option value="swe">Swedish</option>
                        <option value="tur">Turkish</option>
                      </select>
                      <label className="pink-text text-darken-2"><b>Select image language</b></label>
                    </div>                   
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light col s3 m4 l2 offset-s4 offset-m5 offset-l5 pink darken-2 teal-text text-lighten-4" type="submit" id="submitImageButton">Submit image
                      <i className="material-icons right">send</i>
                    </button>
                </div>

                <div className="modal" ref={modal => this.ImageModal = modal}>
                    <div className="modal-content center-align teal lighten-4">
                        <h4 className="pink-text text-darken-2 modal-text">Retrieving image text...</h4>
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



const mapStateToProps = (state) =>{
    return{
        Key: state.OCR_Key,
        Image: state.Image,
        Language: state.Language
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateImageText: (imageText) => {dispatch(updateImageText(imageText))},
        updateImage: (image, language) => {dispatch(updateImage(image, language))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);