const { Thought, model } = require('mongoose')

const thoughtSchema = new Thought({
    thoughtText: {
        type: String,

    },
    createdAt: {
        type: Date,

    },
    username: {

    },
    reactions: {

    },
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought