const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String }
});

// Create a User model
// const User = mongoose.model('User', userSchema);

// module.exports = User;
//יצירה
async function createUser(name, email, phone) {
    try {
        const newUser = new User({ name, email, phone });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        throw new Error(`Failed to create user: ${err.message}`);
    }
}

//עדכון
async function updateUserById(id, newName, newEmail, newPhone) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name: newName, email: newEmail, phone: newPhone }, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (err) {
        throw new Error(`Failed to update user: ${err.message}`);
    }
}

//מחיקה
async function deleteUserById(id) {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (err) {
        throw new Error(`Failed to delete user: ${err.message}`);
    }
}
//קבלה לפי ID
async function getUserById(id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        throw new Error(`Failed to fetch user: ${err.message}`);
    }
}
