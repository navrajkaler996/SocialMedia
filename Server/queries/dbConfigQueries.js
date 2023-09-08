export const CREATE_USERS_TABLE =
  "CREATE TABLE users( userid SERIAL PRIMARY KEY, username VARCHAR(30), email VARCHAR(255), password VARCHAR(255), age INT, city VARCHAR(255), province VARCHAR(255), country VARCHAR(255))";
export const CREATE_POSTS_TABLE =
  "CREATE TABLE posts(postid SERIAL PRIMARY KEY, userid INT, type VARCHAR(30) CHECK (type IN ('text', 'image', 'poll', 'link')), inBand BOOLEAN NOT NULL, band VARCHAR(30), postedat TIMESTAMPTZ, title VARCHAR(30), text TEXT, image TEXT, poll TEXT, link TEXT, FOREIGN KEY (userid) REFERENCES users(userid))";
