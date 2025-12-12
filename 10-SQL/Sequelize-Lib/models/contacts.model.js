import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Contacts = sequelize.define("contactTable", {
    first_name: { 
        type: DataTypes.STRING, allowNull: false 
    },
    last_name: { 
        type: DataTypes.STRING 
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, unique: true 
    },
    phone: { 
        type: DataTypes.STRING 
    },
    address: { 
        type: DataTypes.STRING 
    },
},
{
    timestamps: false
})

export default Contacts