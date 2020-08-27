let express = require('express');
// Importa el modulo para leer el input del usuario
let bodyParser = require('body-parser');
// Sobreescribe el método de envío
let methodOverride = require('method-override')
let app = express();

app.use(methodOverride('_method'))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

let webRoutes = require("./routes/web")

let appConfigs = require("./configs/app")

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(require("connect").bodyParser())
app.use("/", webRoutes)

let exphbs = require("express-handlebars")
const extNameHbs = "hbs"
let hbs = exphbs.create({extname: extNameHbs})
app.engine(extNameHbs, hbs.engine)
app.set("view engine", extNameHbs)

app.listen(appConfigs.express_port, function() {
  console.log('The app is running on port 3000!' /*appConfigs.express_port*/)
});

