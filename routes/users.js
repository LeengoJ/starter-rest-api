var express = require("express");
const p = require("phin");
const { response } = require("../app");
var router = express.Router();
var mysql = require("../model/queries");
//Task object constructor
var Task = function (task) {
  console.log(task);
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
var getUsers = (request, response) => {
  mysql.query("SELECT * FROM User", (error, results) => {
    //mysql.query("SELECT UserID FROM User WHERE UserName like 'loingu'",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.send(results);
      return results;
    };
  });
};
router.get("/getUsers", getUsers);
//////////////////////////////////////////
// var getUsersByName = (request, response) => {
//   mysql.query(
//     "SELECT * FROM User WHERE UserName = @userName",
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.send(results);
//       return results;
//     }
//   );
// };
// async function getUsersByName(User) {
//   const result = await mysql.query(
//     "SELECT UserID FROM User WHERE UserName like '" + User.UserName + "'"
//   );
//   return result;
// }
// router.get("/DAL/getUsersByName", async function (req, res) {
//   //res.json(/*await*/ getUsersByName(req.body));
//   res.json(req.query.UserName);

//   //res.json(/*await*/ getUsersByName(req.query));

//   mysql.query(
//     "SELECT UserID FROM User WHERE UserName like '" + req.query.UserName + "'",
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.send(req.body.UserName);
//       //return results;
//     }
//   );
// }); //"/ DAL / getUsersByName? UserName="+UserName
router.get(
  "/DAL/getUsersByName/:UserName",
  function getUsersByName(req, res, next) {
    let UserName = req.params.UserName;
    UserName = UserName.slice(1, UserName.length);
    console.log(UserName);
    let sql = "SELECT UserID FROM User WHERE UserName like '" + UserName + "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
//------------------------------------------------------------
router.get(
  "/DAL/getUsersByName/:UserName",
  function getUsersByName(req, res, next) {
    let UserName = req.params.UserName;
    UserName = UserName.slice(1, UserName.length);
    console.log(UserName);
    let sql = "SELECT UserID FROM User WHERE UserName like '" + UserName + "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
router.get(
  "/DAL/getUsersByNameAndPass:UserName/:Password",
  function getUsersByNameAndPass(req, res, next) {
    let UserName = req.params["UserName"];
    let PassWord = req.params["Password"];
    UserName = UserName.slice(1, UserName.length);
    PassWord = PassWord.slice(1, PassWord.length);
    console.log(PassWord);
    console.log(UserName);

    let sql =
      "SELECT UserID FROM User WHERE UserName like '" +
      UserName +
      "' AND  Password like '" +
      PassWord +
      "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
router.get(
  "/DAL/getUsersByNameAndPass:UserName/:Password",
  function getUsersByNameAndPassAll(req, res, next) {
    let UserName = req.params["UserName"];
    let PassWord = req.params["Password"];
    UserName = UserName.slice(1, UserName.length);
    PassWord = PassWord.slice(1, PassWord.length);
    console.log(PassWord);
    console.log(UserName);

    let sql =
      "SELECT * FROM User WHERE UserName like '" +
      UserName +
      "' AND  Password like '" +
      PassWord +
      "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
/* GET quotes listing. */

router.get("/getTop3Users", getTop3Users);

// async function CreateAccount(UserDTO) {
//   const result = await mysql.query(
//     `insert into  User(UserName,Password) values('${UserDTO.UserName}','${UserDTO.Password}')`
//   );
// }
// router.post("/DAL/CreateAccount", async function (req, res, next) {
//   try {
//     res.json(CreateAccount(req.query));
//   } finally {
//   }
// });
router.post("/DAL/CreateAccount:Name_and_Pass", function (req, res, next) {
  var up = req.params["Name_and_Pass"].split(":");
  var data = {
    UserName: up[1],
    Password: up[2],
  };
  console.log(data);
  let sql = `insert into  User(UserName,Password) values('${data.UserName}','${data.Password}')`;
  mysql.query(sql, (err, d) => {
    if (err) throw err;
    res.json({ thongbao: "Đã chèn " });
  });
});
/////////////************************************************?????????????????????? */
///// HET PHAN USER DAL
router.get(
  "/DAL/getPicByNamePicture/:PictureName",
  function getPicByNamePicture(req, res, next) {
    let PictureName = req.params["PictureName"];
    PictureName = PictureName.slice(1, PictureName.length);
    let sql =
      "SELECT * FROM Picture Where PictureName like '" + PictureName + "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
///

router.get(
  "/DAL/getPicByNamePicDT:PictureName",
  function getPicByNamePicDT(req, res, next) {
    let PictureName = req.params["PictureName"];
    PictureName = PictureName.slice(1, PictureName.length);

    let sql =
      "SELECT * FROM Picture Where PictureName like '" + PictureName + "'";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
//

var getPicDTAll = (request, response) => {
  mysql.query("SELECT * FROM Picture", (error, results) => {
    (error, results) => {
      if (error) {
        throw error;
      }
      response.send(results);
      return results;
    };
  });
};
router.get("/getPicDTAll", getPicDTAll);

// HET PHAN PICTUREDAL

router.get(
  "/DAL/GetDeTailFiveWinner:PictureID/:Level",
  function getPicByNamePicDT(req, res, next) {
    let PictureID = req.params["PictureID"];
    let Level = req.params["Level"];
    PictureID = PictureID.slice(1, Level.length);
    Level = Level.slice(1, Level.length);
    let sql =
      "SELECT UserID, PictureID, 'Level', Point FROM Winner W WHERE W.PictureID like '" +
      PictureID +
      "'AND W.Level like '" +
      Level +
      "' GROUP BY PictureID, 'Level' ORDER BY Point LIMIT 5 '";
    mysql.query(sql, UserName, (err, d) => {
      res.json(d);
      return d;
    });
  }
);
router.get("/GetDeTailFiveWinner", GetDeTailFiveWinner);
//receive strings
module.exports = router;
