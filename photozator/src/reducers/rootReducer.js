/* Main reducer, because there will be only one data updated in redux, there is no need for more reducers */

import REACT_APP_RAPIX_X_API_KEY from '../Key.js';

const initState = {
    Key: REACT_APP_RAPIX_X_API_KEY,
    ImageText: "",
    TranslatedText: ""
}

function rootReducer(state = initState, action){}


export default rootReducer;