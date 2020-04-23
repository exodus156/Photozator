const translateImageText = (key, text, langFrom, langTo) => {

    let langConverted = "";

    if(langFrom === "ara"){
        langConverted = "ar";
    } else if(langFrom === "bul"){
        langConverted = "bg";
    } else if(langFrom === "chs"){
        langConverted = "zh";
    } else if(langFrom === "cht"){
        langConverted = "zh";
    } else if(langFrom === "hrv"){
        langConverted = "hr";
    } else if(langFrom === "cze"){
        langConverted = "cs";
    } else if(langFrom === "dan"){
        langConverted = "da";
    } else if(langFrom === "dut"){
        langConverted = "nl";
    } else if(langFrom === "eng"){
        langConverted = "en";
    } else if(langFrom === "fin"){
        langConverted = "fi";
    } else if(langFrom === "fre"){
        langConverted = "fr";
    } else if(langFrom === "ger"){
        langConverted = "de";
    } else if(langFrom === "gre"){
        langConverted = "el";
    } else if(langFrom === "hun"){
        langConverted = "hu";
    } else if(langFrom === "kor"){
        langConverted = "ko";
    } else if(langFrom === "ita"){
        langConverted = "it";
    } else if(langFrom === "jpn"){
        langConverted = "ja";
    } else if(langFrom === "pol"){
        langConverted = "pl";
    } else if(langFrom === "por"){
        langConverted = "pt";
    } else if(langFrom === "rus"){
        langConverted = "ru";
    } else if(langFrom === "slv"){
        langConverted = "sl";
    } else if(langFrom === "spa"){
        langConverted = "es";
    } else if(langFrom === "swe"){
        langConverted = "sv";
    } else if(langFrom === "tur"){
        langConverted = "tr";
    }

    let completeLanguage = `${langConverted}-${langTo}`;
    
    const translationLink = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${completeLanguage}`;

    return fetch(translationLink, {method: 'POST'})
    
}

export default translateImageText;