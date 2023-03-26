export const getWordInformations = (keyboard) => {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyboard}`)
      .then((resp) => resp.json());
}