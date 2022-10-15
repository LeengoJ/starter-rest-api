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
      //return results;
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
// router.get(
//   "/DAL/getUsersByName/:UserName",
//   function getUsersByName(req, res, next) {
//     let UserName = req.params.UserName;
//     UserName = UserName.slice(1, UserName.length);
//     console.log(UserName);
//     let sql = "SELECT UserID FROM User WHERE UserName like '" + UserName + "'";
//     mysql.query(sql, UserName, (err, d) => {
//       res.json(d);
//       return d;
//     });
//   }
// );
//------------------------------------------------------------
router.get(
  "/DAL/getUsersByName/:UserName",
  function getUsersByName(req, res, next) {
    let UserName = req.params["UserName"];
    UserName = UserName.slice(1, UserName.length);
    console.log(UserName);
    let sql = "SELECT UserID FROM User WHERE UserName like '" + UserName + "'";
    mysql.query(sql, [], (err, d) => {
      res.json(d);
      //return d;
    });
  }
);

router.get(
  "/DAL/getUsersByUserID/:UserID",
  function getUsersByName(req, res, next) {
    let UserID = req.params.UserID;
    UserID = UserID.slice(1, UserID.length);
    console.log(UserID);
    let sql = "SELECT * FROM User WHERE UserID like '" + UserID + "'";
    mysql.query(sql, [], (err, d) => {
      res.json(d);
      //return d;
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
      //return d;
    });
  }
);
router.get(
  "/DAL/getUsersByNameAndPassAll/:UserName/:Password",
  function getUsersByNameAndPassAll(req, res, next) {
    let UserName = req.params["UserName"];
    let PassWord = req.params["Password"];
    UserName = UserName.slice(1, UserName.length - 1);
    //PassWord = PassWord.slice(1, PassWord.length);
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
      //return d;
    });
  }
);
/* GET quotes listing. */

//router.get("/getTop3Users", getTop3Users);

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
    console.log(PictureName);
    PictureName = PictureName.slice(1, PictureName.length);

    let sql =
      "SELECT * FROM Picture Where PictureName like '" + PictureName + "'";
    mysql.query(sql, PictureName, (err, d) => {
      res.json(d);
      //return d;
    });
  }
);
///

router.get(
  "/DAL/getPicByNamePicDT/:PictureName",
  function getPicByNamePicDT(req, res, next) {
    let PictureName = req.params["PictureName"];
    PictureName = PictureName.slice(1, PictureName.length);

    let sql =
      "SELECT * FROM Picture Where PictureName like '" + PictureName + "'";
    mysql.query(sql, PictureName, (err, d) => {
      res.json(d);
      //return d;
    });
  }
);
//

var getPicDTAll = (request, response) => {
  //response.send("results");
  mysql.query("SELECT * FROM Picture", (error, results) => {
    if (error) {
      throw error;
    }
    response.send(results);
    //return results;
  });
};
router.get("/getPicDTAll", getPicDTAll);

// HET PHAN PICTUREDAL

router.get(
  "/DAL/GetDeTailFiveWinner/:PictureID/:Level",
  function GetDeTailFiveWinner(req, res, next) {
    let PictureID = req.params["PictureID"];
    let Level = req.params["Level"];
    PictureID = PictureID.slice(1, PictureID.length);
    Level = Level.slice(1, Level.length);
    //SELECT TOP 5 WITH TIES USERID , PICTUREID, LEVEL, POINT, TIME FROM WINNER
    //W WHERE W.PICTUREID = @pictureID AND W.LEVEL = @level ORDER BY W.POINT, W.TIME
    let sql =
      "SELECT UserID, PictureID, Level_play, Point FROM Winner W WHERE W.PictureID like '" +
      PictureID +
      "'AND W.Level_play like '" +
      Level +
      "' GROUP BY PictureID, Level_play ORDER BY Point,'Time' LIMIT 5 ";
    mysql.query(sql, [], (err, d) => {
      // res.send("" + err);
      // return -1;
      res.json(d);
      return d;
    });
  }
);

router.get(
  "/DAL/getWinnersByUid_Pid_lv/:UserID/:PictureID/:Level",
  function getUsersByNameAndPass(req, res, next) {
    let UserID = req.params["UserID"];
    let PictureID = req.params["PictureID"];
    let Level = req.params["Level"];
    UserID = UserID.slice(1, UserID.length);
    PictureID = PictureID.slice(1, PictureID.length);
    Level = Level.slice(1, Level.length);

    console.log(PictureID + "1212");
    console.log(UserID + "1212");
    console.log(Level + "1212");

    let sql =
      "SELECT * FROM Winner WHERE UserID like '" +
      UserID +
      "' AND  PictureID like '" +
      PictureID +
      "' AND Level_play like '" +
      Level +
      "'";
    mysql.query(sql, [], (err, d) => {
      res.json(d);
      //return d;
    });
  }
);

router.all("/DAL/InsertWinner/:datas", function InsertWinner(req, res, next) {
  var up = req.params["datas"].split(":");
  var data = {
    UserID: up[1],
    PictureID: up[2],
    Level: up[3],
    Point: up[4],
    TimeSecond: up[5],
  };
  console.log(data);
  var x =
    "INSERT INTO `Winner`(`UserID`, `PictureID`, `Level_play`, `Point`, `TimeSecond`) VALUES ";
  //let sql = `insert into  Winner(UserID, PictureID,'Level', Point, TimeSecond) values(${data.UserID},${data.PictureID},${data.Level},${data.Point},${data.TimeSecond})`;
  let sql =
    x +
    `(${data.UserID},${data.PictureID},${data.Level},${data.Point},${data.TimeSecond})`;

  mysql.query(sql, (err, d) => {
    if (err) throw err;
    res.json({ thongbao: "Đã chèn " });
  });
});
router.all(
  "/DAL/UpdateWinner/point/:datas",
  function InsertWinner(req, res, next) {
    var up = req.params["datas"].split(":");
    var data = {
      UserID: up[1],
      PictureID: up[2],
      Level: up[3],
      Point: up[4],
      TimeSecond: up[5],
    };
    console.log(data);
    let sql = `UPDATE Winner SET Point = '${data.Point}' WHERE UserID = '${data.UserID}' AND PictureID = ${data.PictureID} AND Level_play = ${data.Level};`;

    mysql.query(sql, (err, d) => {
      if (err) throw err;
      res.json({ thongbao: "Đã update " });
    });
  }
);

router.all(
  "/DAL/UpdateWinner/time/:datas",
  function InsertWinner(req, res, next) {
    var up = req.params["datas"].split(":");
    var data = {
      UserID: up[1],
      PictureID: up[2],
      Level: up[3],
      Point: up[4],
      TimeSecond: up[5],
    };
    console.log(data);
    let sql = `UPDATE Winner SET TimeSecond = '${data.TimeSecond}' WHERE UserID = '${data.UserID}' AND PictureID = ${data.PictureID} AND Level_play = ${data.Level};`;

    mysql.query(sql, (err, d) => {
      if (err) throw err;
      res.json({ thongbao: "Đã update " });
    });
  }
);
//receive strings
module.exports = router;
