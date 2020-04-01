/* Main reducer, because there will be only one data updated in redux, there is no need for more reducers */

import { REACT_APP_OCR_API_KEY, REACT_APP_RAPID_API_KEY, REACT_APP_YANDEX_API_KEY } from '../Key.js';

const initState = {
    OCR_Key: REACT_APP_OCR_API_KEY,
    RAPIDAPI_Key: REACT_APP_RAPID_API_KEY,
    YANDEX_Key: REACT_APP_YANDEX_API_KEY,
    ImageText: "",
    TranslatedText: ""
}

function rootReducer(state = initState, action){
    if(action.type == 'UPDATE_IMAGETEXT'){
        return{
            ...state,
            ImageText: action.ImageText
        }
    } else if(action.type == 'UPDATE_TRANSLATEDTEXT'){
        return{
            ...state,
            TranslatedText: action.TranslatedText
        }
    } else if(action.type == 'RESET_TEXT_FIELDS'){
        return{
            ...state,
            ImageText: "",
            TranslatedText: ""
        }
    }
}


export default rootReducer;