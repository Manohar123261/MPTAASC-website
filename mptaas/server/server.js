const express=require('express');
const bodyparser=require('body-parser');
const app = express();
const port = 3000;
app.use(express.json())
app.use(express.static('account-creation'))
const {createPool}=require('mysql');
const pool=createPool({
    host:"localhost",
    user:"root",
    password: "radheradhe1",
    database: "users_info",
    connectionLimit:10
});
console.log("hy");


app.post('/', (req, res) => {
    const userData = req.body;
    console.log("at server");
    // Insert user data into the MySQL database
    res.json({ message: 'Data received on the server', data: userData });
    console.log(userData);
    insert(userData,res);
});
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
function insert(userData,res){
    pool.query('INSERT INTO users_details SET ?',[userData], (error, results) => {
        if (error) {
            console.log(error);
            console.error(error);
            res.status(500).json({ message: 'Error inserting data' });
            console.log("explicit error");
        } else {
            res.status(200).json({ message: 'Data inserted successfully' });
            console.log("data inserted successfully");
        }
    });
}


