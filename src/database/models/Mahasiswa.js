import db from "../db/db";
import { DataTypes } from "sequelize";

const Mahasiswa = db.define("mahasiswa" ,{
    nama : {
        type : DataTypes.STRING,
        allowNull : false
    },
    nim : {
        type : DataTypes.STRING,
        allowNull : false
    },
    kelas : {
        type : DataTypes.STRING,
        allowNull : false
    }
} ,
{
    freezeTableName : true
})

export default Mahasiswa;
