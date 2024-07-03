const express = require('express');
// const mongoose = require('mongoose');
const userRouter = require('./.routing'); // הגדר את הנתיב לפי המיקום המדויק של ה-routing file שלך

const app = express();
const port = 3000; // במקרה שלך, עלול להיות שם אחר

// קישור ל-MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json()); // נדרש כדי לקרוא ב JSON

// הוספת ה-middleware לנתיב
app.use('/api', userRouter); // המסלול של היוזר יהיה ב-'/api/users'

// איזור השרת הוא כאן
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
