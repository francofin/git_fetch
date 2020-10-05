var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

  getUserRepos("facebook");
  getUserRepos("microsoft");
















  // using ajax to load same getUserRepo request $.ajax("https://api.github.com/users/octocat/repos").done(function(data) {console.log(data);});

//   var getUserRepos = function() {
//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//         console.log("inside", response);
//         response.json().then(function(data) {
//         console.log(data);
//      });
//     });
//     console.log("outside");
// };
