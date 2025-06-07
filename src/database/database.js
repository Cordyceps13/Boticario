const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

export function createDatabase() {
    db.serialize(() => {
        db.run("DROP TABLE IF EXISTS lorem");
        db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT) ");

        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("TESTE " + (i + 1));
        }
        stmt.finalize();
    });

    db.close();

}

export async function getData() {
    return await new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db);
        db.all("SELECT rowid AS id, info FROM lorem", (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
            db.close();
        });
    });
}

// module.exports = { createDatabase };