const { model, Schema } = require('mongoose')

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtDate => moment(createdAtDate).format('MMM DD, YYYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: true
    },

},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: "Thought is Required",
        minlength: 1,
        maxlength: 280,

    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtDate => moment(createdAtDate).format('MMM DD, YYYY [at] hh:mm a')

    },
    username: {
        type: String,
        required: true,

    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
    }
})


thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought