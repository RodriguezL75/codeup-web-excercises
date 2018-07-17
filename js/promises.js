"use strict";

const wait = num=> {
    return new Promise((resolve, reject) => {
        setTimeout(
            resolve(),
            num
        );

    });

};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




// const getLastEvent = (username) => {
//     const token ='';
//     const url =`https://api.github.com/users/${username}/events/public`
//     return fetch(url, {headers: {'Authorization': `token ${token}`}});
// }
//
// getLastEvent('NNNNNNNN').then((data) => {
//     lastEvent.forEach((username) => {
//     console.log(data);
// })
//
//     const getLastEvent = ((username)=> {
//         fetch(url, {headers: {"Authorization": `token ${token}`}})
//             .then(data => data.json())
//             .then(data => {
//                 console.log(data[0])
//             })
//     });
//     getLastEvent(username);

const userName = "";
const token = '';
const url = `https://api.github.com/users/${userName}/events/public`;

const getLastEvent = ((userName)=> {
    fetch(url, {headers: {"Authorization": `token ${token}`}})
        .then(data => data.json())
        .then(data => {
            console.log(data[0].created_at)
        })

    });
    getLastEvent(userName);


// }).filter(date => console.date(date));

// Start off with a promise that always resolves



//     const username = `NNNNNNNNNN`;//define the username you are targetting
//     const url = `https://api.github.com/users/${username}/events/public`;//URL of API
//     const token = "1";//your GitHub token
//
// //declare function that 1. fetches the data, 2. puts data in json format, 3. console.log the data
// //so you can read it once you have called the function
// //also with [0] you are selecting the most current entry
// //lastly, call the function, so you can see the data
//
//     const getLastEvent = ((username)=> {
//         fetch(url, {headers: {"Authorization": `token ${token}`}})
//             .then(data => data.json())
//             .then(data => {
//                 console.log(data[0])
//             })
//     });
//     getLastEvent(username);

