var Github = require('./../js/github-model.js').githubModule;

$(document).ready(function()  {
  var user = new User();
  $('#search').submit(function()  {
    $(".output").empty();
    user_name = $("#user_name").val();
    event.preventDefault();
  });
});
