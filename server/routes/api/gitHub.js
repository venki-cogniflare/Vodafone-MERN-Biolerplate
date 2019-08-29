const request = require("superagent");

module.exports = app => {
  let Accesstoken;
  app.get("/user/signin/callback", (req, res, next) => {
    const { query } = req;
    const { code } = query;
    if (!code) {
      return res.send({
        success: false,
        message: "Error: no Code"
      });
    }
    console.log("code" + code);

    request
      .post("https://github.com/login/oauth/access_token")
      .send({
        client_id: "1b7302f2159fa8cd3518",
        client_secret: "a6028841e115d42a8c86e077ececbbe9bfa287b0",
        code: code
      }) // sends a JSON post body

      .set("Accept", "application/json")
      .then(function(result) {
        const data = result.body;
        res.clearCookie('accessToken');
        
        res.cookie("accessToken", data.access_token); 
        // res.send(data);
        res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/helloworld' });
        return res.end();
      });
  });
  
  app.get("/user/getOrganisationRepo", (req, res, next) => {

    // const accessToken = "661e8e6f2f45fcf42e6b3f0e8d5a5437d9be565f";
    console.log('cookies' + JSON.stringify(req.cookies));
    request
      .get("https://api.github.com/user")
      .set('Authorization', 'token ' + req.cookies.accessToken)
      .set("Accept", "application/vnd.github.nightshade-preview+json")
      .set("user-agent", "node.js")
      .then(function(result) {
          res.send(result.body);
      })
      .catch(err => {
        res.send(err);
        // err.message, err.response
     });
      
  });



app.get("/user/getUserrepos", (req, res, next) => {  
    request
      .get("https://api.github.com/user/repos?visibility=all")
      .set('Authorization', 'token ' + req.cookies.accessToken)
      .set("Accept", "application/vnd.github.nightshade-preview+json")
      .set("user-agent", "node.js")
      .then(function(result) {
          res.send(result.body);
      })
      .catch(err => {
        res.send(err);
        // err.message, err.response
     });
      
  });

  app.get("/user/getUserRepo", (req, res, next) => {  
    request
      .get("https://api.github.com/users/venki-vodafone/repos")
      .set('Authorization', 'token ' + req.cookies.accessToken)
      .set("Accept", "application/vnd.github.nightshade-preview+json")
      .set("user-agent", "node.js")
      .then(function(result) {
          res.send(result.body);
      })
      .catch(err => {
        res.send(err);
        // err.message, err.response
     });
      
  });
};