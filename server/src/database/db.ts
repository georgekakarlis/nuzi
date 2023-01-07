import * as sqlite3 from "sqlite3";

export const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, roomId TEXT)");
});
