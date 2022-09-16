import connection from './db'
export default async function handler(req, res) {
    const name = req.query.name;
    const email = req.query.email;
    const message = req.query.message;
    const sql = "INSERT INTO feedback (name, email, message) VALUES ('" + name + "', '" + email + "', '" + message + "')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send("Success");
    })
}