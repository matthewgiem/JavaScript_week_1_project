var Github = require('./../js/github-model.js').githubModule;

$(document).ready(function()  {
  var github = new Github();
  $('#search').submit(function()  {
    $("#githubUser").empty();
    userName = $("#userName").val();
    github.userName = userName;
    github.returnRepos();
    event.preventDefault();
  });
});
