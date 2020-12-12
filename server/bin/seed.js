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


//DATA-BASE CONNECTION

// const dbName = 'Onmyway'
// mongoose.connect(`mongodb://localhost/${dbName}`)

mongoose.connect(`mongodb+srv://nataliafndz26:nat@cluster0.02jwa.mongodb.net/Onmyway`)


// Job.collection.drop()
// User.collection.drop()
// Preferences.collection.drop()


//SEED JOBS

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
    {
        name: 'Do you know how to cook delicious meals? We are looking for you!',
        location: 'Banská Bystrica, Eslovaquia',
        accommodation: 'Hostel',
        timetable: 'Friday to Sunday, 12:00pm-3:00pm, 7:00pm-10:00pm',
        benefits: ['Dinner', 'Health insurance', 'Individual bedroom'],
        image: 'https://images.unsplash.com/photo-1564844536308-50b114a1d946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=598&q=80',
        description: 'We inviting Yoga practitioners who would like to take sessions in the serene beauty and share the healthy living with young travellers',
    },
    {
        name: 'Teach English in a cafe in Seoul, Korea!',
        location: 'Seoul, Corea del Sur',
        accommodation: 'House',
        timetable: 'Thursday to Sunday, 3:00pm-6:00pm',
        benefits: ['Breakfast', 'Lunch', 'Individual bedroom'],
        image: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/07/GSS-cafe-2-eb5b.jpg?quality=90&strip=all&zoom=1&resize=644%2C430&ssl=1',
        description: 'Hi!! Dear travelers, whether you are a drifter, traveler, backpacker, holidaymaker, gap year, or career break we are somewhere you could stop for a while and experience Korean stories from the Korean people! We are a language cafe based in the heart of Seoul. Our cafe is where you can meet Koreans from Seoul and all around South Korea. You can make Korean friends here from different walks of life and share you English language skills :)',
    },
    {
        name: 'Professional photographer',
        location: 'Zouk Mosbeh, Líbano',
        accommodation: 'House',
        timetable: 'Saturday and Sunday, evenings',
        benefits: ['Breakfast', 'Shared bedroom'],
        image: 'https://images.unsplash.com/flagged/photo-1574806434389-0633e107c39a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        description: 'Be a part of our family and help us please to ameliorate the quality of photos that can show better the beauty of the place. You are talented? Professional photographer with professional camera? an artist in photographing? We need you :)',
    },
    {
        name: 'Take care of our hostel and enjoy Armenia!',
        location: 'Yerevan, Armenia',
        accommodation: 'Hostel',
        timetable: 'Monday to Friday, 9:00am-4:00pm',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Some extra money', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/134/331/main/10c1cc6e26a6bb8ebf412165bc99ccb3.jpg',
        description: 'This is all about taking care. Keeping things clean, always eyes open to flecks of dust or renegade plastic bags. Cleaning rooms and common areas and all of this with happiness and punctuality.',
    },
    {
        name: 'Videographer & Photographer',
        location: 'Jaisalmer, India',
        accommodation: 'Hostel',
        timetable: 'Monday to Wednesday, 10:00am-1:00pm',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Some extra money', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/057/031/main/699328dc11589ae7f6d39474811d21e8.jpg',
        description: 'We are shift our property in new bulding so we want new photo for our all hotel all website but we need best camra man for click best photo of my propertry . so guys looking for what come and help us.'
    },
    {
        name: 'Amazing hostel in central Lisbon looking for friendly staff!',
        location: 'Lisboa, Portugal',
        accommodation: 'Hostel',
        timetable: 'Monday to Friday, 8:00am-3:00pm',
        benefits: ['Breakfast', 'Lunch', 'Individual bedroom', 'Health insurance', 'Some extra money'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/005/195/main/95760cde814d8ca011937138ba8cf0b2.jpg',
        description: 'Hi everyone :) We are looking for a friendly, responsible and fun helper, preferably with previous hostel experience, to join our team. We need someone very sociable and extrovert, so if you think you are the right fit, contact us!'
    },
    {
        name: 'Come help in our garden!!',
        location: 'Skopje, Macedonia',
        accommodation: 'House',
        timetable: 'Monday to Friday, 7:00am-10:00pm',
        benefits: ['Breakfast', 'Individual bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/115/330/main/0ca88d4df778bcbeed889b87be9c4a70.jpg',
        description: 'The spring is approaching and we need hands to leave our garden beautiful and bright, you do not need to be an expert but if you have some experience it would be perfect.'
    },
    {
        name: 'Help at our eco campsite and learn to make beer and other stuff',
        location: 'Melnik, Bulgaria',
        accommodation: 'Camping',
        timetable: 'Monday to Friday, 6:00am-12:00pm',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Health insurance'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/164/807/main/59e0ae4a972615a26cd3272cbe8e07bb.jpg',
        description: 'We have set up an Eco campsite and guest house using permaculture principles and also the 3 R ie reduce, reuse and recycle on site. We encourage our guests to think about the environment, separate their waste, reuse the grey water and use environmentally friendly washing / cleaning products. We are in the foothills of the Pirin mountain range in the far south west of Bulgaria.'
    }
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
        interests: ['Sabbatical Year', 'Travel Alone', 'Backpacker', 'Try New Foods'],
        continent: 'Europe',
        skills: ['Cooking', 'Cleaning'],
        time: 'More than 1 year'
    },
    {
        interests: ['Professional Development', 'Learn Languages', 'Travel Alone'],
        continent: 'Asia',
        skills: ['Teaching'],
        time: '0-6 months'
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Digital Nomadism'],
        continent: 'Asia',
        skills: ['IT'],
        time: '6 months-1 year'
    },
    {
        interests: ['Backpacker', 'Try New Foods'],
        continent: 'Asia',
        skills: ['Working with guests', 'Cleaning'],
        time: 'More than 1 year'
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Digital Nomadism'],
        continent: 'Asia',
        skills: ['IT'],
        time: '0-6 months'
    },
    {
        interests: ['Self-knowledge', 'Travel Alone',  'Learn Languages'],
        continent: 'Europe',
        skills: ['Working with guests', 'Cleaning'],
        time: '6 months-1 year'
    },
    {
        interests: ['Sabbatical Year', 'Couple Travel', 'Backpacker'],
        continent: 'Europe',
        skills: ['Cleaning', 'Ecological activities', 'Working with animals'],
        time: '0-6 months'
    },
    {
        interests: ['Sabbatical Year', 'Self-knowledge', 'Travel Alone', 'Backpacker'],
        continent: 'Europe',
        skills: ['Ecological activities', 'Working with animals'],
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
        console.log (results[2].length)
        results[0].forEach((user) => theUsers.push(user._id))
        results[1].forEach((job) => theJobs.push(job._id))
        results[2].forEach((preferences) => thePreferences.push(preferences._id))
    })
    .then(() => User.findByIdAndUpdate(theUsers[4], { preferences: thePreferences[12] }, { new: true }))
    .then(() => User.findByIdAndUpdate(theUsers[5], { preferences: thePreferences[13] }, { new: true }))

    .then(() => Job.findByIdAndUpdate(theJobs[0], { preferences: thePreferences[0], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[1], { preferences: thePreferences[1], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[2], { preferences: thePreferences[2], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[3], { preferences: thePreferences[3], user: theUsers[3] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[4], { preferences: thePreferences[4], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[5], { preferences: thePreferences[5], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[6], { preferences: thePreferences[6], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[7], { preferences: thePreferences[7], user: theUsers[3] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[8], { preferences: thePreferences[8], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[9], { preferences: thePreferences[9], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[10], { preferences: thePreferences[10], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[11], { preferences: thePreferences[11], user: theUsers[2] }, { new: true }))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close())


