const pool = require('../db');

class User {

  static async findOneById(id) {
    const sql = "SELECT * FROM users WHERE id = ?";
    try {
      const user = await pool.query(sql, [ id ]);
      return user[0];
    } catch(err) {
      return null;
    }
  };

  static async findOneByEmail(email) {
    const sql = "SELECT * FROM users WHERE email = ?";
    try {
      const user = await pool.query(sql, [ email ]);
      return user[0];
    } catch(err) {
      return {};
    }
  };

  static async create(name, email) {
    const sql = "INSERT INTO users (name, email) VALUES(?, ?)";
    try {
      const result = await pool.query(sql, [ name, email ]);
      return true;
    } catch(err) {
      return false;
    }
  };
};

module.exports = User;