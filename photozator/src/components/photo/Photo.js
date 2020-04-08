import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateImageText, updateImage } from '../../actions/UpdateActions';
import getImageText from '../../actions/ThunksImageAction';
import "./Photo.css";

class Photo extends Component {
    render(){
        const submitImage = (e) => {
            e.preventDefault();

            let reader = new FileReader();
            reader.onload = () =>{
                let dataURL = reader.result;
                this.props.updateImage(dataURL);
            };

            reader.readAsDataURL(this.image.files[0]);
            
            
            setTimeout(()=>{
                getImageText(this.props.Key, this.props.Image)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }, 500);
        }

        return(
            <form onSubmit={submitImage}>
                <div className="row">
                    <div className="file-field input-field col s10 offset-s1">
                        <div className="btn pink teal-text text-lighten-4">
                            <span>Image</span>
                            <input type="file" id="imageInput" accept="image/*" required ref={input => this.image = input}/>
                        </div>
                        <div className="file-path-wrapper center-align">
                            <input className="file-path pink-text validate" type="text" placeholder="Upload image for text extraction." />
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light col s3 m4 l2 offset-s4 offset-m5 offset-l5 pink teal-text text-lighten-4" type="submit" id="submitImageButton">Submit image
                      <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        Key: state.OCR_Key,
        Text: state.ImageText,
        Image: state.Image
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateImageText: (imageText) => {dispatch(updateImageText(imageText))},
        updateImage: (image) => {dispatch(updateImage(image))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);