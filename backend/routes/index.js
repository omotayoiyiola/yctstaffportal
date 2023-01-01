import express from 'express'
//const { default: next } = require("next");
const router = express.Router();
//const db = require("../db");
import database from './database.js'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import bodyparser from 'body-parser'
const app = express()
app.use(express.static("./public"));


// body-parser middleware use
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

router.post("/mylogin", function (request, response) {
  var staffno = request.body.staffno;
  var password = request.body.password;
  var passwithkey = "STAff" + password;
  var hashpazz = crypto.createHash("md5").update(passwithkey).digest("hex");

  if (staffno && password) {
   var query = `
      SELECT * FROM identy 
      WHERE staffno = "${staffno}"
      `;

    database.query(query, function (error, data) {
      if (data?.length > 0) {
        if (data[0].hpazz === hashpazz) {
          response.send(data);
        } else {
          response.status(500).send({ message: "Incorrect Password" });
        }
      } else {
        response.status(500).send({ message: "Incorrect Staff Number" });
      }
      response.end();
    });
  } else {
    response.status(500).send({
      message: "Please Enter Staff Number and Password Details",
    });
    response.end();
  }
});
router.put("/resetpassword/:id", (req, res) => {
  const {
    oldpassword,
    newpassword,
    confirmpassword,
    securityquestion,
    answer,
  } = req.body;
  const id = req.params.id;

  var passwithkey = "STAff" + oldpassword;
  var hashpazzold = crypto.createHash("md5").update(passwithkey).digest("hex");

  var passwithkey2 = "STAff" + newpassword;
  var hashpazznew = crypto.createHash("md5").update(passwithkey2).digest("hex");

  if (
    oldpassword &&
    newpassword &&
    confirmpassword &&
    securityquestion &&
    answer
  ) {
   const query = `
      SELECT * FROM identy 
      WHERE id = "${id}" 
      `;

    database.query(query, function (error, data) {
      if (data.length === 0) {
        res.send({ message: "No record of staff" });
      } else if (data[0].hpazz !== hashpazzold) {
        res.status(400).send({
          message: "Your current password is incorrect. Try again.",
        });
      } else if (newpassword.length < 8 || newpassword.length > 16) {
        res.status(400).send({
          message: "New password must be between 8 and 16 character length",
        });
      } else if (newpassword !== confirmpassword) {
        res.status(400).send({
          message: "New password and confirm password are not the same",
        });
      } else {
        console.log("run update");
        database.query(
          `UPDATE identy SET hpazz=?, secq=?, seca=?
        WHERE id =?`,
          [hashpazznew, securityquestion, answer, id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).send({
          message: "password updated successfully",
        });
            }
          }
        );
      }
    });
  }
});
//route for passport upload 
router.put("/uploadpassport/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  if (!req.file) {
    console.log('hhh');
    return res.send({message:"No file uploaded"});
  } else {
    var imgsrc = "https://staff.yabatech.edu.ng/images/" + req.file.filename;
    database.query(
      `UPDATE identy SET imgg=?
    WHERE id =?`,
      [imgsrc, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message: "Passport uploaded successfully"});
        } else if (err) {
          res.status(404).send({message:"Passport uploaded failed"});
        }
      }
    );
  }
});
//upload signature
//route
router.put("/uploadsignature/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  if (!req.file) {
    res.status(404).send({message:"Status:No file uploaded"});
  } else {
    var imgsrc = "https://staff.yabatech.edu.ng/images/" + req.file.filename;
    database.query(
      `UPDATE identy SET sign=?
    WHERE id =?`,
      [imgsrc, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Status: Signature uploaded successfully"});
        } else if (err) {
          res.status(404).send({message:"Status:Signature uploaded failed"});
        }
      }
    );
  }
});
router.get("/staffrecord/:id", function (request, response) {
  const id = request.params.id;

  if (id) {
    const query = `
      SELECT * FROM identy 
      WHERE id = "${id}"
      `;

    database.query(query, function (error, data) {
      if (data.length > 0) {
        response.send(data);
      } else {
        response.send({ message: "Incorrect Password" });
      }
    });
  }
});
router.put("/editbiodata/:id", (req, res) => {
  const { titl, sexx, categ, fonoffi, fon, emaloffi, emal, addy } = req.body;
  const id = req.params.id;

  if (titl && sexx && categ && fonoffi && fon && emaloffi && emal && addy) {
    database.query(
      `UPDATE identy SET titl=?, sexx=?, categ=?, fonoffi=?, fon=?, emaloffi=?, emal=?, addy=?
        WHERE id =?`,
      [titl, sexx, categ, fonoffi, fon, emaloffi, emal, addy, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Update successful"});
        } else if (err) {
          res.status(404).send({message:"Status:Sorry, update failed"});
        }
      }
    );
  }
});
export default router
