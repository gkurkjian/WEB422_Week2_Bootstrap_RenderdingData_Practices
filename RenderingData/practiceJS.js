// This is a warm up practice and strategy using     JS to fetch data from the url and display them

// // This function to test if we're fetching the data from the url
// function populatePostTable(userId = null) {
//     let url = +userId // attempt to convert userId to a number
//     ? `https://jsonplaceholder.typicode.com/posts?userId${userId}`
//     : `https://jsonplaceholder.typicode.com/posts`;
// 
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         });
// }
// 
// console.log(populatePostTable(1))


//// Dealing with the names
// // variable names
// let names = ["Brat", "Michael", "George", "Kukulani"];
// // just doing console.log() to display the names
// let list = `<ul>${names}</ul>`
// 
// console.log(list);


// //// Dealing with the names and displaying it in Unordered list and List and etc. 
// ////Like <ul><li>Brat</li><li>Michael</li><li>George</li><li>Kukulani</li></ul>
// 
// let names = ["Brat", "Michael", "George", "Kukulani"];
// // Will display the names in plus we'll push it into the <li> that we can deal with it
// let list = `<ul>${names.map(name => `<li>${name}</li>`).join("")}</ul>`
// 
// 
// console.log(list);  //<ul><li>Brat</li><li>Michael</li><li>George</li><li>Kukulani</li></ul>
