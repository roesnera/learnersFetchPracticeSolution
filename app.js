const button = document.getElementById('getResults')
button.addEventListener('click', function() {
// Use the fetch api to display some simple user data!

url = 'https://reqres.in/api/users'


// the function that will return the final string to be added to our HTML

function stringBuilder(data) {
    //do something
    let finalString = `There are ${data.data.length} names in this json.<br/>`;
    for(let user of data.data){
        finalString += `I am ${user.first_name} ${user.last_name} and my email is ${user.email}.<br/>`
    }
    return finalString
}


// call the fetch api with the correct input argument!
fetch(url)
    // convert the returned data into a json using the object's built-in methods
    .then(res => res.json())
    // pass the resulting json into our stringBuilder function and then display the information on our web page!
    .then(function(data) {
        console.log(data);
        let finalString = stringBuilder(data);

        document.getElementById('results').innerHTML = finalString;
    })
    // console.log an error message in case something goes wrong
    .catch(error => console.log('ERROR'))
})