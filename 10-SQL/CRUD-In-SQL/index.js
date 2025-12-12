import express from "express";
import mysql from "mysql2"
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "contactsdb"
})

db.connect((error) => {
    if (error) {
        console.error(error)
        return
    }
    console.log("MYSQL Connected...")
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// Read All Data
app.get("/contacts", (req, res) => {
    db.query("SELECT * FROM contacts", (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(data);
    })
})

// Read Single Data
app.get("/contacts/:id", (req, res) => {
    db.query("SELECT * FROM contacts WHERE ID= ?", [req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (data.length === 0) {
            return res.status(404).send({ message: "Contacts not found!" });
        }

        res.send(data[0]);
    })
})

// Send Data In Database
app.post("/contacts", (req, res) => {
    const { first_name, last_name, email, phone, address } = req.body
    const sql = "INSERT INTO contacts (first_name, last_name, email, phone, address) VALUES (?, ?, ?, ?, ?)"

    db.query(sql, [first_name, last_name, email, phone, address], (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send({
            message: "Data Added...",
            id: data.insertId
        });
    })
})

// Upadate Data In Database
app.put("/contacts/:id", (req, res) => {
    const { first_name, last_name, email, phone, address } = req.body
    const sql = "UPDATE contacts SET first_name=?, last_name=?, email=?, phone=?, address=? WHERE ID=?"

    db.query(sql, [first_name, last_name, email, phone, address, req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (data.affectedRows === 0) {
            return res.status(404).send({ message: "Contacts not found!" });
        }

        res.send({
            message: "Data Updated..."
        });
    })
})

// Delete Single Data
app.delete("/contacts/:id", (req, res) => {
    db.query("DELETE FROM contacts WHERE ID= ?", [req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (data.affectedRows === 0) {
            return res.status(404).send({ message: "Contacts not found!" });
        }

        res.send({ message: "Contact Deleted..."});
    })
})