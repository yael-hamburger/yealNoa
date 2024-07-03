// קובץ: controller.js

// קבלת דפים
function getPage(req, res) {
    // לוגיקה לקבלת דף מהשרת או ממסד נתונים
    res.send('היי, זהו דף ראשי!');
}

// יצירת פוסט
function createPost(req, res) {
    // לוגיקה ליצירת פוסט במסד נתונים או בשרת
    res.send('פוסט נוצר בהצלחה!');
}

// עדכון פוסט
function updatePost(req, res) {
    // לוגיקה לעדכון פוסט קיים
    res.send('הפוסט עודכן בהצלחה!');
}

// מחיקת פוסט
function deletePost(req, ress) {
    // לוגיקה למחיקת פוסט קיים
    ress.send('הפוסט נמחק בהצלחה!');
}

// קריאת פוסט מסוים
function getPost(req, res) {
    // לוגיקה לקבלת פוסט מסוים לפי מזהה
    const postId = req.params.id;
    res.send(`הפוסט עם המזהה ${postId}`);
}

// קריאת רשימת פוסטים
function getAllPosts(req, res) {
    // לוגיקה לקבלת רשימת פוסטים
    res.send('רשימת כל הפוסטים');
}

// ייצוא הפונקציות לשימוש במקומות אחרים
module.exports = {
    getPage,
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPosts
};
