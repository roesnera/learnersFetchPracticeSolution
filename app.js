// let myData;




// button.addEventListener('click', function() {
// // Use the fetch api to display some simple user data!

// const url = 'https://reqres.in/api/users'


// // the function that will return the final string to be added to our HTML

// function stringBuilder(data) {
//     //do something
//     let finalString = `There are ${data.data.length} names in this json. \n \n`;
//     for(let user of data.data){
//         finalString += `I am ${user.first_name} ${user.last_name} and my email is ${user.email}. \n \n`
//     }
//     return finalString;
// }

// function otherFirstCallback(response) {
//     response.json();
// }

// const firstCallback = response => response.json();

// // call the fetch api with the correct input argument!
// fetch(url)
//     // convert the returned data into a json using the object's built-in methods
//     .then(response => response.json())
//     // pass the resulting json into our stringBuilder function and then display the information on our web page!
//     .then(function(respObj) {
//         const data = respObj.data;
//         myData = data;
//         console.log(data[4].id);
//         // console.log(respObj.data[0].first_name);

//         let finalString = stringBuilder(respObj);

//         // document.getElementById('results').innerHTML = finalString;

//         // console.log(finalString);
//     })
//     // console.log an error message in case something goes wrong
//     .catch(error => console.log('ERROR'));
// });

async function makeRequest() {
    try {
        const url = 'https://reqres.in/api/users';
        const response = await fetch(url);
        // console.log(response);
        const responseObject = await response.json();
        // console.log(data);
        console.log(responseObject.data[5].email);
    } catch (err) {
        console.error(err);
    }
}


const button = document.getElementById('getResults');
button.addEventListener('click', makeRequest);