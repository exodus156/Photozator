/* Main reducer, because there will be only one data updated in redux, there is no need for more reducers */

import REACT_APP_OCR_API_KEY from '../Key.js';
import REACT_APP_RAPID_API_KEY from '../Key.js';
import REACT_APP_YANDEX_API_KEY from '../Key.js';

const initState = {
    OCR_Key: REACT_APP_OCR_API_KEY,
    RAPIDAPI_Key: REACT_APP_RAPID_API_KEY,
    YANDEX_Key: REACT_APP_YANDEX_API_KEY,
    ImageText: "",
    TranslatedText: ""
}

function rootReducer(state = initState, action){}


export default rootReducer;