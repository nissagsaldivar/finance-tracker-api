import Database from 'better-sqlite3';

//create/connect to a local database file
const db = new Database('finance.db');

//create the spending table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS spending (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    value INTEGER NOT NULL
  )
`);

//put some values in the table with default data if table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM spending').get() as { count: number };
if (count.count === 0) {
  const insert = db.prepare('INSERT INTO spending (category, value) VALUES (?, ?)');
  insert.run('Weed', 300);
  insert.run('Rent', 1650);
  insert.run('Groceries', 400);
}

export default db;