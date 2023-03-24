export const callApi = (word) =>{
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
}