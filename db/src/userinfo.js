const appRouter = require("@sap/approuter");
const jwtDecode = require("jwt-decode");

let ar = appRouter();

ar.beforeRequestHandler.use("/userinfo", (req, res) => {
    res.statusCode = 200;
    let decodedJWTToken = jwtDecode(req.user.token.accessToken);
    res.end(JSON.stringify({decodedJWTToken}));
})

ar.start();

