// const express = require('express');
// const {sequelize} = require('./models');
// const userRoutes = require('./UserRoutes');


// const port= process.env.PORT || 3000;

// const app = express();

// app.use(express.json());

// app.use('/users',userRoutes);

// sequelize.authenticate()
//     .then(()=>{
//         console.log("Connection Established Successfully!!!");

//     })
//     .catch(err=>{
//         console.log("Unable to Connect due to ", err)
//     });

// app.listen(port,'0.0.0.0',()=>{
//     console.log("Sever is running on port:",port);
// })


const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Ensure this import is correct
const userRoutes = require('./UserRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync(); 
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});


