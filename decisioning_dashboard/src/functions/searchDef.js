async function searchDef(key){

    
    const baseUrl = process.env.REACT_APP_SEARCHDEF_URL; //Base Endpoint only, concat key onto
    const fullUrl = baseUrl + '/' + key; // baseUrl does not have the / to seperate Key, hence why in this

    let result;

    //HTTP to get definition
    fetch(fullUrl)
    .then((res) => {
        //Runs if get a non 200-299 HTTP Status code, indicating an error
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((res) => {
        //Happy path
        result = res.description;

        console.log(result);

        //Rather then worry about HTML/CSS, use a standard Alert to keep simple. A v2 could use a dedicated HTML box
        alert(`Definition of ${key} is:
        
            ${result}
        `);

        return result;
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

export default searchDef;