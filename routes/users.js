var express = require("express");
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
    if (error) {
      throw error;
    }
    response.send(results);
    return results;
  });
};
router.get("/getUsers", getUsers);
//////////////////////////////////////////
var getUsersByName = (request, response) => {
  mysql.query(
    "SELECT * FROM User WHERE UserName = @userName",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.send(results);
      return results;
    }
  );
};

async function getUsersByName(User) {
  const result = await mysql.query(
    "SELECT * FROM User WHERE UserName = User.UserName"
  );
}
router.post("/DAL/getUsersByName", async function (req, res, next) {
  try {
    res.json(await User.getUsersByName(req.body));
  } finally {
  }
}); //"/ DAL / getUsersByName? UserName="+UserName

/* GET quotes listing. */
var getTop3Users = (request, response) => {
  mysql.query(
    "SELECT * FROM Winner ORDER BY Point DESC LIMIT 3",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.send(results);
      return results;
    }
  );
};

router.get("/getTop3Users", getTop3Users);
//
async function CreateAccount(UserDTO) {
  const result = await mysql.query(
    "insert into  User(UserName,Password) values(${UserDTO.UserName},${UserDTO.Password})"
  );
}
router.post("/DAL/CreateAccount", async function (req, res, next) {
  try {
    res.json(await UserDTO.CreateAccount(req.body));
  } finally {
  }
});

module.exports = router;
