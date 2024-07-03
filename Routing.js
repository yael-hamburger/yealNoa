const express = require('express');
const router = express.Router();
const User = require('./User'); 

// CREATE - יצירת משתמש חדש
router.post('/users', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = new User({ name, email, phone });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// READ - קריאת משתמש לפי ID
router.get('/users/:id', getUser, (req, res) => {
    res.json(res.user);
});

// UPDATE - עדכון משתמש לפי ID
router.patch('/users/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.phone != null) {
        res.user.phone = req.body.phone;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - מחיקת משתמש לפי ID
router.delete('/users/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'Deleted user' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
}

module.exports = router;
