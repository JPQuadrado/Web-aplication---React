const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const header = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country){
    return fetch(`${path}/${country}` , header)
        .then((response) => response.json())
}

export default {
    getCountry
}