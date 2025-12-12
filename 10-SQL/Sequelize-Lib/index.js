import express from "express";
import sequelize from "./database/database.js";
import contact from "./models/contacts.model.js";

const app = express();
app.listen(3000);

sequelize.sync().then(() => console.log("Database * Table Created!")).catch(error => console.log("Error : ", error))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Read single data
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await contact.findAll()
    res.json(contacts);
  } catch (error) {
    res.status(500).send("Error while fetch data...");
  }
});

// read single data
app.get("/contacts/:id", async (req, res) => {
  try {
    const contacts = await contact.findByPk(req.params.id)
    if (!contacts) {
      return res.status(404).send("Contact not found");
    }
    res.json(contacts);
  } catch (error) {
    res.status(500).send("Error while fetch data...");
  }
});

// Add data
app.post("/contacts", async (req, res) => {
  try {
    const contacts = await contact.create(req.body)
    res.json(contacts);
  } catch (error) {
    res.status(500).send("Error while add data...");
  }
});

// Update data
app.put("/contacts/:id", async (req, res) => {
  try {
    const contacts = await contact.findByPk(req.params.id)
    if (!contacts) {
      return res.status(404).send("Contact not found");
    }
    await contacts.update(req.body)
    res.json(contacts);
  } catch (error) {
    res.status(500).send("Error while update data...");
  }
});

// Delete data
app.delete("/contacts/:id", async (req, res) => {
  try {
    const contacts = await contact.findByPk(req.params.id)
    if (!contacts) {
      return res.status(404).send("Contact not found");
    }
    await contacts.destroy()
    res.json({ message: "Contect deleted successfully.."});
  } catch (error) {
    res.status(500).send("Error while delete data...");
  }
});
