const getImageText = (key, image) =>{

    var myHeaders = new Headers();
    myHeaders.append("apikey", key);
    
    var formdata = new FormData();
    formdata.append("base64Image", image);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    return fetch("https://api.ocr.space/parse/image", requestOptions)
}

export default getImageText;