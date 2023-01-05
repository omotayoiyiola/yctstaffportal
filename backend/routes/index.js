import express from 'express'
//const { default: next } = require("next");
const router = express.Router();
//const db = require("../db");
import database from './database.js'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import bodyparser from 'body-parser'
import moment from 'moment';
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
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});
router.put("/editprofessional/:id", (req, res) => {
  const qualprof = req.body.qualprof;
  const id = req.params.id;

  if (qualprof && qualprof.length > 2) {
    database.query(
      `UPDATE identy SET qualprof=?
        WHERE id =?`,
      [qualprof, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send({message:":Sorry, update failed"});
        }
      }
    );
  }
});

//edit next of kin

router.put("/editnextofkin/:id", (req, res) => {
  const nextkin = req.body.nextkin;
  const id = req.params.id;

  if (nextkin && nextkin.length > 2) {
    database.query(
      `UPDATE identy SET nextkin=?
        WHERE id =?`,
      [nextkin, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});

//edit children

router.put("/editchildren/:id", (req, res) => {
  const chd = req.body.chd;
  const id = req.params.id;

  if (chd && chd.length > 2) {
    database.query(
      `UPDATE identy SET chd=?
        WHERE id =?`,
      [chd, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});

//edit spouse

router.put("/editspouse/:id", (req, res) => {
  const spous = req.body.spous;
  const id = req.params.id;

  if (spous && spous.length > 2) {
    database.query(
      `UPDATE identy SET spous=?
        WHERE id =?`,
      [spous, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send("Sorry, update failed");
        }
      }
    );
  }
});
//edit research areas

router.put("/editresearcharea/:id", (req, res) => {
  const resach = req.body.resach;
  const id = req.params.id;

  if (resach && resach.length > 3) {
    database.query(
      `UPDATE identy SET resach=?
        WHERE id =?`,
      [resach, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});
router.put("/researchgate/:id", (req, res) => {
  const rgate = req.body.rgate;
  const id = req.params.id;

  if (rgate && rgate.length > 10) {
    console.log("got the variable");
    database.query(
      `UPDATE identy SET rgate=?
        WHERE id =?`,
      [rgate, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Updated successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});
router.put("/editseminars/:id", (req, res) => {
  const seminars = req.body.seminars;
  const id = req.params.id;

  if (seminars && seminars.length > 5) {
    database.query(
      `UPDATE identy SET seminars=?
        WHERE id =?`,
      [seminars, id],
      (err, result) => {
        if (result) {
          res.status(200).send({message:" Updated successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry, update failed"});
        }
      }
    );
  }
});
//upload publications all in one pdf
//route
router.put("/uploadpublications/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  if (!req.file) {
    res.status(404).send({message:"No file uploaded"});
  } else {
    var imgsrc = "https://staff.yabatech.edu.ng/images/" + req.file.filename;
    database.query(
      `UPDATE identy SET pub=?
    WHERE id =?`,
      [imgsrc, id],
      (err, result) => {
        if (result) {
          res
            .status(200)
            .send({message:"Publications file uploaded successfully"});
        } else if (err) {
          res.status(404).send({message:"Sorry upload failed"});
        }
      }
    );
  }
});
//Submit single publication
router.post("/singlepublication", upload.single("image"), (req, res) => {
  const dreg = moment().format("MM/DD/YYYY HH:mm:ss");
  var imgsrc = "https://staff.yabatech.edu.ng/images/" + req.file.filename;

  const { usid, staffid, titl, autho, abst, yea, priva, shar } = req.body;

  if (usid && staffid && titl && autho && abst && yea && priva && shar) {
    console.log("all is true" + dreg + imgsrc);
    database.query(
      `INSERT INTO publi (usid, staffid, titl, autho, abst, lenk, yea, priva, dreg, shar) VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [usid, staffid, titl, autho, abst, imgsrc, yea, priva, dreg, shar],
      (err, result) => {
        if (result) {
          res.status(200).send({message:"Status: Publication uploaded successfully"});
        } else if (err) {
          res.status(404).send({message:"Status:Sorry, upload failed"});
        }
      }
    );
  }
});
router.get("/allsinglepublications", function (request, response) {
  const query = `
    SELECT * FROM publi 
      `;

  database.query(query, function (err, alldata) {
    if (alldata.length >= 0) {
      response.send(alldata);
    } else if (err) {
      res.status(404).send("Status: Sorry, try again");
    }
  });
});
router.post("/docmgt", upload.single("image"), (req, res) => {
  const dreg = moment().format("MM/DD/YYYY HH:mm:ss");
  var imgsrc = "https://staff.yabatech.edu.ng/images/" + req.file.filename;

  const { usid, staffid, titl } = req.body;

  if (usid && staffid && titl) {
    // console.log("all is true" + dreg + imgsrc);
    database.query(
      `INSERT INTO docmgt (usid, staffid, titl, lenk, dreg) VALUES (?,?,?,?,?)`,
      [usid, staffid, titl, imgsrc, dreg],
      (err, result) => {
        if (result) {
          res.status(200).send("Status: Document uploaded successfully");
        } else if (err) {
          res.status(404).send("Status:Sorry, upload failed");
        }
      }
    );
  }
});
router.get("/mysinglepublications/:id", function (request, response) {
  const id = request.params.id;

  if (id) {
    const query = `
      SELECT * FROM publi 
      WHERE usid = "${id}"
      `;

    database.query(query, function (error, data) {
      if (data) {
        response.send(data);
      } else {
         response.status(404).send("Status: Sorry could not fetch data, try again");
      }
    });
  }
});
export default router
