var apiKey = require('./../.env').apiKey;

function Github() {
  this.userName = "";
}

Github.prototype.retuenRepos = function () {
  var url = "https://api.github.com/users/" + this.userName + "/repos?access_token=" + apiKey;
  $.get(url).then(function(response) {
    url = response[0].owner.avatar_url
    $('#picture').prepend('<img src="' + url + '" alt="pic of programmer">')
    debugger;
    response.forEach(function(project)  {
      $("#githubUser").append("<p>respository name: " + project.name + "<br>respository discription: " + project.discription + "</p>");
    });
  }).fail(function(error) {
    $("#githubUser").append("<p>the user name you looked up doesn't exist in git hub</p>")
  });
};

exports.githubModule = Github;
