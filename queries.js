const Pool = require("pg").Pool;
const jwt = require("jsonwebtoken");
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "nwt",
  password: "Jj72630F",
  port: 5432
});
const secret = "mysecret";

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY userid ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const userid = parseInt(request.params.userid);

  pool.query(
    "SELECT * FROM users WHERE userid = $1",
    [userid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createUser = (request, response) => {
  const { first_name, second_name, email, username, password } = request.body;

  pool.query(
    "INSERT INTO users (userid, first_name, second_name, email, username, password) VALUES (DEFAULT, $1, $2, $3, $4, $5)",
    [first_name, second_name, email, username, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const userid = parseInt(request.params.userid);
  const { first_name, second_name, email, username, password } = request.body;

  console.log(userid);
  pool.query(
    "UPDATE users SET first_name = $1, second_name = $2, email = $3, username = $4, password = $5 WHERE userid = $6",
    [first_name, second_name, email, username, password, userid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${userid}`);
    }
  );
};

const deleteUser = (request, response) => {
  const userid = parseInt(request.params.userid);

  pool.query(
    "DELETE FROM users WHERE userid = $1",
    [userid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${userid}`);
    }
  );
};

const getPictures = (request, response) => {
  pool.query(
    "SELECT * FROM pictures ORDER BY pictureid DESC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getPictureByTag = (request, response) => {
  pool.query(
    "SELECT * FROM pictures WHERE primary_tag = $1 OR secondary_tag = $2",
    [search_tag],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createPicture = (request, response) => {
  const userid = parseInt(request.params.userid);
  const { picture_link, primary_tag, secondary_tag } = request.body;

  pool.query(
    "INSERT INTO pictures (pictureid, picture_link, userid, primary_tag, secondary_tag) VALUES (DEFAULT, $1, $2, $3, $4)",
    [picture_link, userid, primary_tag, secondary_tag],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Picture added with ID: ${results.insertId}`);
    }
  );
};

const getPictureComments = (request, response) => {
  const pictureid = parseInt(request.params.pictureid);

  pool.query(
    "SELECT * FROM comments WHERE pictureid = $1",
    [pictureid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticles = (request, response) => {
  pool.query(
    "SELECT * FROM articles ORDER BY articleid ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticleById = (request, response) => {
  const articleid = parseInt(request.params.articleid);

  pool.query(
    "SELECT * FROM articles WHERE articleid = $1",
    [articleid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const logIn = (request, response) => {
  const { username, password } = request.body;

  pool.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [username, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getPictures,
  getPictureByTag,
  createPicture,
  getPictureComments,
  getArticles,
  getArticleById,
  logIn
};
