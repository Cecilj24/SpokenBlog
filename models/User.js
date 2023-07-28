const { Schema, model } = require('mongoose');

// Is this the correct format or would I have to use mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
 {
    username: { type: String, required: [true, 'userName is required'], unique: true, trimmed: true },
    email: { type: String, required: [true, 'Email is required'], unique: true, trimmed: true, validate: [validateEmail, 'Please fill a valid email address'],},
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    
    ],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    
    ]
},
{
    toJSON: {
        virtuals: true,
      },
      id: false,
}
);


userSchema.virtual('friendCount')
.get( function () {
    return `${this.friends.length}`;
}
);

const User = model('User', userSchema)









module.exports = User;