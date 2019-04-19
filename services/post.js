const pool = require('../db');

class Post {

  static async create(title, author_id) {
    try {
      const sql = "INSERT INTO posts (title, author_id) VALUES (?, ?)"
      const post = await pool.query(sql, [title, author_id]);
      return {id: post.insertId, title};
    } catch (err) {
      return false;
    }
  };

  // TODO: Need Pagination 
  static async getAll(author_id) {
    try {
      const sql = "SELECT * FROM posts";
      const posts = await pool.query(sql);
      const jsonPosts = JSON.stringify(posts);
      return JSON.parse(jsonPosts);
    } catch(err) {
      return false;
    }
  };

  static async findByAuthorId(author_id) {
    try {
      const sql = "SELECT * FROM posts WHERE author_id = ?";
      const posts = await pool.query(sql, [author_id]);
      if (posts.length > 0) {
        console.log(posts);
        const jsonPosts = JSON.stringify(posts);
        return JSON.parse(jsonPosts);
      }
      return [];
    } catch (err) {
      return false;
    }
  }

};

module.exports = Post;