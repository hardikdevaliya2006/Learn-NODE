import { Sequelize } from "sequelize";

const sequelize = new Sequelize("contactsdb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
    .then(() => console.log("MYSQL Connected..."))
    .catch((error) => {
        console.log("Error : ", error);
    })

export default sequelize