const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productAdmin = require('./routers/productsAdmin');
const categoryAdmin = require('./routers/categoriesAdmin');
const categoryClient = require('./routers/categoriesClient');
const brandAdmin = require('./routers/brandAdmin');
const brandClient = require('./routers/brandClient');
const customer = require('./routers/customers');
const admin = require('./routers/employees');
const order = require('./routers/order');
const productClient = require('./routers/productsClient');
const productSearch = require('./routers/productsSearch');
const db = require('./config/database');
const app = express();
const PORT = process.env.port || 5000;

//-- database
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}));
app.use(express.json());
app.use(cors());


app.use('/api/products-admin', productAdmin);
app.use('/api/products-client', productClient);
app.use('/api/products-search', productSearch);

app.use('/api/categories-admin', categoryAdmin);
app.use('/api/categories-client', categoryClient);

app.use('/api/brands-admin', brandAdmin);
app.use('/api/brands-client', brandClient);

app.use('/api/customers', customer);
app.use('/api/employees', admin);

app.use('/api/orders', order);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});