const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
    function (req, res) {
     console.log("Harinder");
    }
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
