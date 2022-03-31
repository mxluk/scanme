import { Low, JSONFile} from "lowdb";
import {fileURLToPath} from "url";
import express from "express";

var app = express();

const port = process.env.PORT || 3000;

const file = './db.json';
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

app.get('/', function (req, res) {
      db.data.num++;
      db.write().then(() => {
            res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      });

});
app.get('/db', function (req, res) {
      res.status(200).send(db.data.num.toString());
});
app.listen(port, function () {
      console.log('Example app listening on port '+port+'!');
});
