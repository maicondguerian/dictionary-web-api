export const callApi = (inpWord) =>{
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`);
}