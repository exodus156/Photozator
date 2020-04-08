/* Main reducer, because there will be only one data updated in redux, there is no need for more reducers */

import { REACT_APP_OCR_API_KEY, REACT_APP_RAPID_API_KEY, REACT_APP_YANDEX_API_KEY } from '../Key';

const initState = {
    OCR_Key: REACT_APP_OCR_API_KEY,
    RAPIDAPI_Key: REACT_APP_RAPID_API_KEY,
    YANDEX_Key: REACT_APP_YANDEX_API_KEY,
    ImageText: "",
    TranslatedText: "",
    Image: "asdads"
}

function rootReducer(state = initState, action){
    if(action.type === 'UPDATE_IMAGETEXT'){
        return{
            ...state,
            ImageText: action.imageText
        }
    } else if(action.type === 'UPDATE_TRANSLATEDTEXT'){
        return{
            ...state,
            TranslatedText: action.translatedText
        }
    } else if(action.type === 'RESET_TEXT_FIELDS'){
        return{
            ...state,
            ImageText: "",
            TranslatedText: ""
        }
    } else if(action.type === 'UPDATE_IMAGE'){
        return{
            ...state,
            Image: action.image
        }
    } else{
        return state;
    }
}


export default rootReducer;