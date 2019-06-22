// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const SportsTeamSchema = new mongoose.Schema({
    
    teamName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    conference: {
        type: String,
        enum: ['EAST','WEST'],
        default: 'EAST'
    }
}, {
    timestamps: true
});

//Query Helper
SportsTeamSchema.query.east = function() {
    return this.where({
        conference: 'EAST'
    });
};

 SportsTeamSchema.query.west = function () {
    return this.where({
        conference: 'WEST'
    });
};



// Exporting our resource model

module.exports = mongoose.model('SportsTeam', SportsTeamSchema);