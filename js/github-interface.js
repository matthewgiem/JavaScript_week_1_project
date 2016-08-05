var Github = require('./../js/github-model.js').githubModule;

$(document).ready(function()  {
  var github = new Github();
  $('#search').submit(function()  {
    $("#githubUser").empty();
    user_name = $("#user_name").val();
    github.userName = user_name;
    github.returnRepos();
    event.preventDefault();
  });
});
