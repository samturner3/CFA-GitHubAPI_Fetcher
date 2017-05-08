// Get the data of a user from github
//Show the parts of the data i want to see (n of repos etc)
//Get user to be prompted for which username

 const axios = require('axios');
//
// axios.get('https://api.github.com/users/samturner3')
//   .then(function (response) {
//     console.log(responce["data"]["name"]);
//   })
//   .catch(function (error)
//     console.log(error);
// });

const prompt = require('prompt');

function getGithub(username) {

  axios.get(`https://api.github.com/users/${username}`)
    .then(function (response) {
      console.log(responce["data"]["login"]);
    })
    .catch(function (error) {
      console.log(error);
  });

}

prompt.start();

prompt.get(['username'], function (err, result) {
  console.log('You entered: ' + result.username);
  getGithub(result.username);
});
