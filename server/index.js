const express = require('express');
require('./services/passportService');
const authRoutes = require('./routes/authRoutes');
// Password: EKC0f44Wzi23EvCV
// dasariharinder
// mongodb+srv://dasariharinder:EKC0f44Wzi23EvCV@cluster0.ixy6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);