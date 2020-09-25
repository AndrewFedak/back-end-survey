const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true
    },
    userAnswers: [
        {
            questionName: {
                type: String,
                require: true,
                trim: true
            },
            questionAnswerPoint: {
                type: Number,
                require: true,
                trim: true
            },
        }
    ],
}, {
    timestamps: true
});

const User = mongoose.model('User', userScheme);

module.exports = User;