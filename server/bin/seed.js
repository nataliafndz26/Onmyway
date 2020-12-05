//SEED USER




//SEED JOBS

const mongoose = require('mongoose')
const Jobs = require('../models/jobs')
const Preferences = require('../models/preferences')

const dbName = 'Onmyway'
mongoose.connect(`mongodb://localhost/${dbName}`)