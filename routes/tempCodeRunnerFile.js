const getTop3Users = (request, response) => {
  mysql.query(
    "SELECT top 3 FROM ChillWithMe ORDER BY id ASC",
    (error, results) => {
      // if (error) {
      //   throw error;
      // }
      console.log(results);
      response.status(200).send(results.rows);
    }
  );
};