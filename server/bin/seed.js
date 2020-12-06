const mongoose = require('mongoose')
const Job = require('../models/jobs')
const User = require('../models/user')
const Preferences = require('../models/preferences')

//SEED USER

const bcrypt = require("bcryptjs")
const bcryptSalt = 10

const salt = bcrypt.genSaltSync(bcryptSalt)
const password1 = "gon"
const hashPass1 = bcrypt.hashSync(password1, salt)



//SEED JOBS

const dbName = 'Onmyway'
mongoose.connect(`mongodb://localhost/${dbName}`)


// Job.collection.drop()
// User.collection.drop()
// Preferences.collection.drop()

const jobs = [
    {
        name: 'Give us a hand with cleaning!',
        location: 'Melbourne, Australia',
        accommodation: 'Hostel',
        timetable: 'Monday to Friday, 9:00am-2:00pm',
        benefits: ['Breakfast', 'Lunch', 'Health insurance', 'Shared bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/018/272/main/H6_BackGarden_Social_copy.jpg',
        description: 'We´re currently looking for new general staff at our RICHMOND and BRUNSWICK hostels. This role is mainly about cleaning. You will also perform office duties, take rent payments and check in guests. Also you will help create an inclusive culture of shared experiences in a easy going and open minded culture while maintaining a Clean, Safe and Fun place to live.',
    },
    {
        name: 'Help us make a difference in kid´s lives!',
        location: 'Mbeya Urban, Tanzania',
        accommodation: 'Camping',
        timetable: 'Monday to Thursday, 1:00am-1:00pm',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Individual bedroom', 'Laundry'],
        image: 'https://asanteafrica.files.wordpress.com/2010/11/img_1065-copy.jpg',
        description: 'We´re looking for volunteers to help with our kid´s daycare program. This is some daily activities: 1. Painting, drawing, and writing; 2. Clay or play dough play; 3. Puzzles and games; 4. Reading books; 5. sensory activities; 6. Sports and Games',
    },
    {
        name: 'Experience rural life in a horseback ridind proyect in Amazonas',
        location: 'Chachapoyas ,Perú',
        accommodation: 'Farm',
        timetable: 'Three days a week',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Individual bedroom', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/159/169/main/ed650235530703f6692db4aaf8ed80fa.jpg',
        description: 'My wife Jessica and I are an international couple with our first child, living in the North of Peru. I am a medical veterinarian by trade, specializing in horses. Jessica has her education in preventative wellness. Needs: ️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️Help us taking care with the horses, Photo sessions in real horse expeditions in Peruvian farming communities, Web developer, Digital design development for educational material.',
    },
    {
        name: 'Teach some yoga and make the world healthy!',
        location: 'Dehradun, India',
        accommodation: 'House',
        timetable: 'Monday to Friday, 6:00pm-9:00pm',
        benefits: ['Breakfast', 'Health insurance', 'Shared bedroom', 'Some extra money'],
        image: 'https://mochilerosentailandia.com/wp-content/uploads/2019/11/yoga-India.jpg',
        description: 'We inviting Yoga practitioners who would like to take sessions in the serene beauty and share the healthy living with young travellers',
    },
]

const users = [
    {
        username: "dayan",
        password: hashPass1,
        name: 'Dayan Rojas',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFVComRAmBrUg/profile-displayphoto-shrink_800_800/0/1571211855973?e=1613001600&v=beta&t=cBSB3VgdnugD2BI9pc7KH7UXKjNu1PNDeYZzXEmCbdE',
        description: 'Lovely woman that enjoys meeting young people',
        role: 'HOST',
    },
    {
        username: "jon",
        password: hashPass1,
        name: 'Jon Arechalde',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQF9fnDDBfA6cQ/profile-displayphoto-shrink_800_800/0?e=1613001600&v=beta&t=uAw4DkIVjzeBkyPfdFXeLV9XbyoMn6h-HJjHiJEUa54',
        description: 'Lovely woman that enjoys meeting young people',
        role: 'HOST',
    },
    {
        username: "hector",
        password: hashPass1,
        name: 'Hector Antón',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHLId1sh1tzmA/profile-displayphoto-shrink_800_800/0?e=1613001600&v=beta&t=J9EWfnzmELZ4_rpDVEoLoV6_HT5R4v5_PtvfByf9SPo',
        description: 'Lovely woman that enjoys meeting young people',
        role: 'HOST',
    },
    {
        username: "belen",
        password: hashPass1,
        name: 'Belen Olias',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHs9qEBy-BHog/profile-displayphoto-shrink_800_800/0/1516605864182?e=1613001600&v=beta&t=VsqoXTgeQ30hbcx745tSLYDXhXVVEn_jUCebYjLPU3s',
        description: 'Lovely woman that enjoys meeting young people',
        role: 'HOST',
    },
    {
        username: "natalia",
        password: hashPass1,
        name: 'Natalia Fernandez',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHs9qEBy-BHog/profile-displayphoto-shrink_800_800/0/1516605864182?e=1613001600&v=beta&t=VsqoXTgeQ30hbcx745tSLYDXhXVVEn_jUCebYjLPU3s',
        description: 'Lovely woman that enjoys meeting young people',
        favourites: [],
        role: 'USER',
    },
    {
        username: "gonza",
        password: hashPass1,
        name: 'Gonzalo Argüelles',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHs9qEBy-BHog/profile-displayphoto-shrink_800_800/0/1516605864182?e=1613001600&v=beta&t=VsqoXTgeQ30hbcx745tSLYDXhXVVEn_jUCebYjLPU3s',
        description: 'Lovely woman that enjoys meeting young people',
        favourites: [],
        role: 'USER',
    },
]

const preferences = [
    {
        interests: ['Travel Alone', 'Backpacker'],
        continent: 'Oceania',
        skills: ['Working with guests', 'Cleaning'],
        time: '6 months-1 year'
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Travel Alone'],
        continent: 'Africa',
        skills: ['Teaching', 'Community work'],
        time: '6 months-1 year',
    },
    {
        interests: ['Self-knowledge', 'Travel Alone', 'Digital Nomadism', 'Backpacker', 'Try New Foods',],
        continent: 'South America',
        skills: ['Working with animals', 'IT'],
        time: '0-6 months'
    },
    {
        interests: ['Self-knowledge', 'Travel Alone', 'Try New Foods', 'Spiritual Development'],
        continent: 'Asia',
        skills: ['Teaching', 'Ecological activities'],
        time: 'More than 1 year'
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Try New Foods'],
        continent: 'Africa',
        skills: ['Teaching', 'Community work', 'Cleaning'],
        time: '6 months-1 year',
    },
    {
        interests: ['Self-knowledge', 'Professional Development', 'Travel Alone', 'Spiritual Development'],
        continent: 'Asia',
        skills: ['Teaching', 'Ecological activities', 'IT'],
        time: '6 months-1 year'
    },
]


let theUsers = []
let theJobs = []
let thePreferences = []

let createUsers = User.create(users)
let createJobs = Job.create(jobs)
let createPreferences = Preferences.create(preferences)

Promise.all([createUsers, createJobs, createPreferences])
    .then((results) => {
        results[0].forEach((user) => theUsers.push(user._id))
        results[1].forEach((job) => theJobs.push(job._id))
        results[2].forEach((preferences) => thePreferences.push(preferences._id))
    })
    .then(() => User.findByIdAndUpdate(theUsers[4], { preferences: thePreferences[4] }, { new: true }))
    .then(() => User.findByIdAndUpdate(theUsers[5], { preferences: thePreferences[5] }, { new: true }))

    .then(() => Job.findByIdAndUpdate(theJobs[0], { preferences: thePreferences[0], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[1], { preferences: thePreferences[1], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[2], { preferences: thePreferences[2], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[3], { preferences: thePreferences[3], user: theUsers[3] }, { new: true }))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close())






//// SEED PREVIO
// const createUsers = jobs.map(job => {
//     const newUser = new User(job.user)
//     return newUser
//         .save()
//         .then(user => {
//             return user.username
//         })
//         .catch(error => {
//             throw new Error(`Impossible to add the user. ${error}`)
//         })
// })


// const createPreferences = jobs.map(job => {
//     const newPreference = new Preferences(job.preferences)
//     return newPreference
//         .save()
//         .then(preferences => {
//             return preferences.continent
//         })
//         .catch(error => {
//         throw new Error(`Impossible to add the preference. ${error}`)
//     })
// })


// let findUsers = Promise.all(createUsers)
//     .then(user => {
//         return jobs.map(job => {
//             return User.findOne({ username: job.user.username })
//                 .then(user => {
//                     if (!user) {
//                         throw new Error(`unknown user ${job.user.username}`)
//                     }
//                     return Object.assign({}, job, { user: user._id })
//                 })
//         })
//     })
//     .catch(error => {
//         throw new Error(error)
//     })

// let findPreferences = Promise.all(createPreferences)
//     .then(prerences => {
//         return jobs.map(job => {
//             return Preferences.findOne({ continent: job.preferences.continent })
//                 .then(preferences => {
//                     if (!preferences) {
//                         throw new Error(`unknown preference ${job.preferences.continent}`)
//                     }
//                     return Object.assign ({}, job, {preferences: preferences._id})
//             })
//         })
//     })
//     .catch(error => {
//         throw new Error(error)
//     })




// const saveJobs =  findUsers
//     .then(findUsers => {
//         return Promise.all(findUsers)
//             .then(jobs => {
//                 return jobs.map(job => {
//                     const newJob = new Job(job)
//                     return newJob.save()
//                 })
//             })
//     }).then(savedJobs => {
//         Promise.all(savedJobs)
//             .then(jobs => jobs.forEach(job => console.log(`created ${job.name}`)))
//             .then(() => mongoose.connection.close())
//             .catch(err => console.log("Error while saving the job: ", err))
//     })

