const getImageText = (key, image, language) =>{

    var myHeaders = new Headers();
    myHeaders.append("apikey", key);
    
    var formdata = new FormData();
    formdata.append("base64Image", image);
    formdata.append("language", language);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    return fetch("https://api.ocr.space/parse/image", requestOptions)
}

export default getImageText;