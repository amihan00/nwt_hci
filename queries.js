const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "nwt",
  password: "Jj72630F",
  port: 5432
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY userid ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUsersById = (request, response) => {
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
<<<<<<< HEAD
    "INSERT INTO users (userid, first_name, second_name, email, username, password) VALUES (DEFAULT, $1, $2, $3, $4, $5)",
=======
    "INSERT INTO users (first_name, second_name, email, username, password) VALUES ($1, $2, $3, $4, $5)",
>>>>>>> a31c52ae012eac171202141ed7ffb9190056315a
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
<<<<<<< HEAD
  const { first_name, second_name, email, username, password } = request.body;
=======
  const { name, email } = request.body;
>>>>>>> a31c52ae012eac171202141ed7ffb9190056315a

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
    "SELECT * FROM pictures ORDER BY pictureid ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createPicture = (request, response) => {
  const { link } = request.body;

  pool.query(
    "INSERT INTO pictures (link) VALUES ($1)",
    [link],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Picture added with ID: ${results.insertId}`);
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

<<<<<<< HEAD
const logIn = (request, response) => {
  const { username, password } = request.body;

  pool.query(
    "SELECT * FROM users WHERE username = $1, password = $2",
    [username, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
      console.log(response);
    }
  );
};

=======
>>>>>>> a31c52ae012eac171202141ed7ffb9190056315a
module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  getPictures,
  createPicture,
  getArticles,
<<<<<<< HEAD
  getArticleById,
  logIn
=======
  getArticleById
>>>>>>> a31c52ae012eac171202141ed7ffb9190056315a
};
