const express = require("express");
const db = require("./utils/db");
// const bc = require("./utils/bc");
const compression = require("compression");
const app = express();
// const s3 = require("./s3");
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });
const basicAuth = require("basic-auth");
// (server, { origins: "localhost:8080" saratu.heroku.app:* });

app.use(compression());
app.use(express.static("public"));
app.use(express.json());

// ########################### body parser + cookies ######################## //

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const cookieSession = require("cookie-session");
const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});
app.use(cookieSessionMiddleware);
io.use(function(socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

// ############################ + vulnerabilities ########################### //

const csurf = require("csurf");

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

// ########################################################################## //

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

// ############################ upload img setup ############################ //

// var multer = require("multer");
// var uidSafe = require("uid-safe");
// var path = require("path");
//
// var diskStorage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, __dirname + "/uploads");
//     },
//     filename: function(req, file, callback) {
//         uidSafe(24).then(function(uid) {
//             callback(null, uid + path.extname(file.originalname));
//         });
//     }
// });
//
// var uploader = multer({
//     storage: diskStorage,
//     limits: {
//         fileSize: 2097152
//     }
// });

// ########################################################################## //
// ############################### GET ROUTES ############################### //
const auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "salt" || creds.pass != "funky-chicken") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Please enter your credentials."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(auth);

app.get("/welcome", function(req, res) {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

// ########################################################################## //

app.get("*", function(req, res) {
    if (!req.session.userId && req.url == "/client") {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

server.listen(8080, function() {
    console.log("I'm listening");
});

// ######################## SOCKET IO ######################## //

// socket - object that represents a server connection
//
// io.on("connection", socket => {
//     console.log(`Socket with id ${socket.id} just connected`);
//     socket.on("disconnect", () => {
//         console.log(`Socket with id ${socket.id} just disconnected`);
//     });
//     db.getMessages()
//         .then(results => {
//             // console.log("chat results", results.rows);
//             socket.emit("chatMessages", results.rows.reverse());
//         })
//         .catch(err => console.log(err));
//
//     socket.on("chatMessage", async msg => {
//         console.log(msg);
//         try {
//             const newChat = await db.newChat(
//                 socket.request.session.userId,
//                 msg
//             );
//             const newChatInfo = await db.newChatInfo(newChat.rows[0].id);
//             // console.log("new chat info", newChatInfo.rows[0]);
//             io.sockets.emit("chatMessage", newChatInfo.rows[0]);
//         } catch (e) {
//             console.log(e);
//         }
//     });
// });
