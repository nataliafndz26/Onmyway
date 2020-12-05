const mongoose = require('mongoose')
const Job = require('../models/jobs')
const Preferences = require('../models/preferences')
const User = require ('../models/user')

//SEED USER

const bcrypt = require("bcryptjs")
const bcryptSalt = 10

const salt = bcrypt.genSaltSync(bcryptSalt)
const password1 = "gon"
const hashPass1 = bcrypt.hashSync(password1, salt)



//SEED JOBS

const dbName = 'Onmyway'
mongoose.connect(`mongodb://localhost/${dbName}`)


// Jobs.collection.drop()
// Preferences.collection.drop()
// User.collection.drop()

const jobs = [
    {
        name: 'Give us a hand with cleaning!',
        location: 'Melbourne, Australia',
        accommodation: 'Hostel',
        timetable: 'Monday to Friday, 9:00am-2:00pm',
        benefits: ['Breakfast', 'Lunch', 'Health insurance', 'Shared bedroom'],
        image: "https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/018/272/main/H6_BackGarden_Social_copy.jpg",
        description: "We're currently looking for new general staff at our RICHMOND and BRUNSWICK hostels. This role is mainly about cleaning. You will also perform office duties, take rent payments and check in guests. Also you will help create an inclusive culture of shared experiences in a easy going and open minded culture while maintaining a Clean, Safe and Fun place to live.",
        // preferences: {
        //     'interests': ['Travel Alone', 'Backpacker'],
        //     'continent': 'Oceania',
        //     'skills': ['Working with guests', 'Cleaning'],
        //     'time': ['6 months-1 year']
        // },
        user: {
            "username": "Marga",
            'password': hashPass1,
            'name': 'Margaret Doe',
            'image': 'https://trialfacts.com/wp-content/uploads/2018/02/c-diff-image-300x199.jpeg',
            'description': 'Lovely woman that enjoys meeting young people',
            'role': 'HOST',
        }, 
    }, 
]

const createUsers = jobs.map(job => {
    const newUser = new User(job.user)
    return newUser
        .save()
        .then(user => {
            return user.username;
        })
        .catch (error=> {
          throw new Error(`Impossible to add the user. ${error}`)
    })
})


let findUsers = Promise.all(createUsers)
    .then(users => {
        return jobs.map(job => {
            return User.findOne({ username: job.user.username })
                .then(user => {
                    if (!user) {
                        throw new Error(`unknown user ${job.user.username}`);
                    }
                    return Object.assign({}, job, {user: user._id})
            })
        })
    })
    .catch(error => {
        throw new Error(error)
    })

const saveJobs = findUsers
    .then(findUsers => {
    return Promise.all(findUsers)
        .then(jobs => {
            return jobs.map(job => {
                const newJob = new Job(job)
                return newJob.save()   
        })
    })
    }).then(savedJobs => {
        Promise.all(savedJobs)
            .then(jobs => jobs.forEach(job => console.log(`created ${job.name}`)))
            .then(() => mongoose.connection.close())
            .catch(err => console.log("Error while saving the job: ", err))
})











