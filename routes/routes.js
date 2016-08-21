module.exports = function(app){
  app.use('/auth', require('./login.js'));

  app.use('/*' , function(req, res){
     res.sendFile(process.cwd() + '/views/main.html');
  })
}
