const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        required: true, 
        min: [1, 'Please include more characters'],
        max: 280
     },

     username: { type: String, required: [true, 'userName is required'], unique: true, trimmed: true },

     createdAt: { 
        type: Date, 
        default: Date.now ,
        get: (Date) => timeSince(Date)
    },
   
});


const Thought = model('Thought', thoughtSchema)


module.exports = Thought