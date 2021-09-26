module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  // Set up additional routes here
  
  // Set up additional routes here
  router.get('/ndvazquez/aboutme', function(req, res, next) {
    res.render(
      username + '/aboutme',
      {
         title: username + '\'s About Me Page',
         username: username
      });
  });

};