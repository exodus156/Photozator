export const updateImageText = (imageText) => {
    return{
        type: 'UPDATE_IMAGETEXT',
        imageText
    };
};

export const updateTranslatedText = (translatedText) => {
    return{
        type: 'UPDATE_TRANSLATEDTEXT',
        translatedText
    };
};

export const updateImage = (image, language) => {
    return{
        type: 'UPDATE_IMAGE',
        image,
        language
    };
};