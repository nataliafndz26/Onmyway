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

mongoose.connect(`mongodb+srv://nataliafndz26:nat@cluster0.02jwa.mongodb.net/Onmyway`)


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
        comments: []
    },
    {
        name: 'Help us make a difference in kid´s lives!',
        location: 'Mbeya Urban, Tanzania',
        accommodation: 'Camping',
        timetable: 'Monday to Thursday, 1:00am-1:00pm',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Individual bedroom', 'Laundry'],
        image: 'https://asanteafrica.files.wordpress.com/2010/11/img_1065-copy.jpg',
        description: 'We´re looking for volunteers to help with our kid´s daycare program. This is some daily activities: 1. Painting, drawing, and writing; 2. Clay or play dough play; 3. Puzzles and games; 4. Reading books; 5. sensory activities; 6. Sports and Games',
        comments: []
    },
    {
        name: 'Experience rural life in a horseback ridind proyect in Amazonas',
        location: 'Chachapoyas ,Perú',
        accommodation: 'Farm',
        timetable: 'Three days a week',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Individual bedroom', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/159/169/main/ed650235530703f6692db4aaf8ed80fa.jpg',
        description: 'My wife Jessica and I are an international couple with our first child, living in the North of Peru. I am a medical veterinarian by trade, specializing in horses. Jessica has her education in preventative wellness. Needs: ️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️Help us taking care with the horses, Photo sessions in real horse expeditions in Peruvian farming communities, Web developer, Digital design development for educational material.',
        comments: []
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
    },
    {
        name: 'Come to see how a "country life refuge" is like (:',
        location: ' Gualeguaychú Department, Argentina',
        accommodation: 'Farm',
        timetable: '36 h/week, Monday to Sunday, 8:00am-1:00pm',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Dinner', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/122/728/main/ce3cfc5e46792e767fdeed2743f49a38.jpg',
        description: 'We are now looking for longer stay experienced volunteers to help us with our self-sufficiency energy projects, green roof repairing, general house maintenance, andgarden&orchard expansion. Please specify your working experience in your application. We are particularly interested in volunteers with skills in the following: farming, garden, orchard, forestry, milking, fencing, carpentry, masonry, electricity, plumbing, echo wise heating, etc.'
    },
    {
        name: 'Help us creating fun experiences in the land of Mariachi and Tequila',
        location: 'Guadalajara, México',
        accommodation: 'Hostel',
        timetable: '24 h/week, Friday, Saturday and Sunday',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Health insurance'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/012/842/main/HN12.jpg',
        description: 'Our Volunteers are the leaders for all the fun activities at the hostel, we have a daily activity that you will need to organize, your main goal will be to get friend and involve everybody in the different activities, every guest should have a great experience staying with us and tell the world about it through websites reviews.'
    },
    {
        name: 'Receptionnist / Come live in the forest',
        location: 'Montcalm, Canadá',
        accommodation: 'Eco accommodation',
        timetable: '25 h/week, flexible timetable',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Shared bedroom', 'Individual bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/037/103/main/dbee2863d479600a4eb53baaf04c5ea9.jpg',
        description: 'We are established on a 34 acres plot of woodland, one hour north of Montreal. We have small cabins on the land where guests can come sleep under the stars and see through bubbles, sleep in a tipi or a tree house. We need volunteers to help us with the reception and answering calls and emails and assisting with bookings.'
    },
    {
        name: 'Live Like A Local In An Historic Mississippi River Town',
        location: 'Alma, USA',
        accommodation: 'Hotel',
        timetable: 'Monday to friday 8:00am-3:00pm',
        benefits: ['Breakfast', 'Lunch', 'Individual bedroom','Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/169/790/main/5bf22fbc811b1c4895d29fb26237cee2.jpg',
        description: 'Looking for help with housekeeping, breakfast service & gardening at our bed & breakfast in historic Alma, Wisconsin. Private room & bath. Located on the MIssissippi River. Cleaning 5 bedrooms/baths during the day ready for check in by 4pm Assist with breakfast preparation & service in the morning Assist with keeping our gardens attractive'
    },
    {
        name: 'Be a volunteer in an animal rescue center and make a difference!',
        location: 'San Lorenzo, Costa Rica',
        accommodation: 'House',
        timetable: 'Monday to Sunday 9:00am-12:00pm',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Shared bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/023/199/main/89f1211cbc1a260bfc2f80c5978415f5.jpg',
        description: 'Our organization is an environmental and animal-friendly zone in Costa Rica located in a hidden valley in the middle of a cloud forest. We are 15 friends of many years, vegan and animal lovers. We´re an animal rescue center that has more than 700 dogs, cats, horses, ducks, goats, geese, hen and all the wildlife around.Come help us in the center by keeping it awesome'
    },
    {
        name: 'Come help us in the coolest hostel in San Diego!',
        location: 'San Diego County, California, Estados Unidos',
        accommodation: 'Hostel',
        timetable: '25h/week',
        benefits: ['Breakfast', 'Dinner','Shared bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/033/832/main/bc638700f43a187858e7395c5edfe943.jpg',
        description: 'Welcome to our hostel, in the San Diego LGBT neighborhood with many bars, restaurants, clubs walkable to the house as well as the famous Balboa Park! We´re looking for general help, and mostly with gardening, farming and handyman tasks:) Join us and enjoy the best of California!'
    },
    {
        name: 'Photography and Videography volunteer',
        location: 'Bomet, Kenia',
        accommodation: 'Community',
        timetable: 'Flexible schedule, 3 days a week',
        benefits: ['Breakfast', 'Lunch', 'Dinner'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/168/351/main/d02afbe3dcd983730543dff12b352145.jpg',
        description: 'We need help in creating the organization´s documentaries both in picture and video forms.We also need help in managing social media accounts and updating our website.The volunteer can also help in online fundraising to support any project within the organization.'
    },
    {
        name: 'Teaching and taking care of children in Tanzania! :)',
        location: 'Bugiri, Uganda',
        accommodation: 'House',
        timetable: 'Monday to Saturday, 9:00am-3:00pm',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Shared bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/026/872/main/33e99e40d61b595e6225b0fd2c7f3999.jpg',
        description: 'Our project is providing free quality education, care, nutrition and health services to less fortunate rural children in Bugiri region in Uganda. We need volunteers for the following activities: • Teaching English, reading, and writing skills; • Teaching Creative Arts, Sports and games, • Science, Hygiene and Environmental protection skills • Arithmetic and counting; • Cooking food. Please, check program description for more info.'
    },
    {
        name: 'Come and practice language with local people in our community',
        location: 'Bata, Guinea Ecuatorial',
        accommodation: 'House',
        timetable: 'Monday to Saturday, 9:00am-3:00pm',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Shared bedroom', 'Individual bedroom', 'Some extra money', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/015/809/main/70f119b93c6246718543edbc9099daa5.jpg',
        description: 'Since we started hosting volunteers, local people and youth in our community are very eager to practice and try to talk to our volunteers when they walk in the street. We took it as advantage for them to practice and learn new languages (Basic language is Spanish), even if they are eager to learn any other foreign language. We opened evening class for them to learn and practice languages. All volunteers interested in joining them are welcome!'
    },
    {
        name: 'Casual staff wanted for stunning remote wilderness lodge!',
        location: 'Glenorchy, New Zeland',
        accommodation: 'Host House',
        timetable: 'One free day a week, Monday to Saturday, 8:00am-4:00pm',
        benefits: ['Breakfast', 'Lunch','Shared bedroom'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/029/272/main/fa226ded94127acdf49b2c72a919de5c.jpg',
        description: 'The main tasks would consist of cleaning (rooms, kitchen, bathrooms, toilets etc.) and housekeeping. Sometimes we need help in our cute but very busy cafe/gift shop in Glenorchy with a B&B in the garden. Help includes serving food & drinks, taking orders and cleaning the B&B. Other work may include general maintenance/odd jobs, such as chopping wood, cutting branches, mowing lawns, weeding etc. We try to use your skills as best we can.'
    },
    {
        name: 'Filming & editing - short hostel promo videos',
        location: 'Melbourne, Australia',
        accommodation: 'Hostel',
        timetable: 'Flexible Schedule, 10h/week',
        benefits: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Shared bedroom', 'Individual bedroom', 'Some extra money', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/023/732/main/675b411d9952b0d4d15ae35e02bb7577.jpg',
        description: 'We´re looking to create a handful of 30 second promo videos to highlight the events we host at Landing Pads Accommodation, Melbourne´s best little hostels. The videos will need to highlight some events we host in-house, including our weekly Family Dinner, job seekers tutorial and others.We will be using this as promotional material online and so they will need to be of professional standard.Please contact us if you have experience.'
    },
    {
        name: 'Graffiti / graphic Art',
        location: 'Melbourne, Australia',
        accommodation: 'Hostel',
        timetable: '20h/week',
        benefits: ['Breakfast', 'Lunch', 'Shared bedroom', 'Laundry'],
        image: 'https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/003/570/main/H11_Beers_in_the__garden___copy.jpg',
        description: 'Hi There, We have some plain boring white walls in our hostle including our hallways, dining, and lounge area. We are looking for an experienced Graffiti, Stencil or Graphic artist to add some color and life to our walls, with some inspirational text and Images We are open to ideas on what goes up so feel free to pitch your ideas, the theme would be and adventure and shared culture. Cheers Matt'
    },
]

const users = [
    {
        username: "dayan",
        password: hashPass1,
        name: 'Dayan Rojas',
        email: 'garguelles2701@gmail.com',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFVComRAmBrUg/profile-displayphoto-shrink_800_800/0/1571211855973?e=1613001600&v=beta&t=cBSB3VgdnugD2BI9pc7KH7UXKjNu1PNDeYZzXEmCbdE',
        description: 'Lovely woman that enjoys meeting new people',
        role: 'HOST',
    },
    {
        username: "jon",
        password: hashPass1,
        name: 'Jon Arechalde',
        email: 'garguelles2701@gmail.com',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQF9fnDDBfA6cQ/profile-displayphoto-shrink_800_800/0?e=1613001600&v=beta&t=uAw4DkIVjzeBkyPfdFXeLV9XbyoMn6h-HJjHiJEUa54',
        description: 'Tech lover, and passionate about videogames. I also love playing football and meeting new people that likes practising sports. If you choose to stay in one of my hostels, we can organanise football matches or play videogames all together!',
        role: 'HOST',
    },
    {
        username: "hector",
        password: hashPass1,
        name: 'Hector Antón',
        email: 'garguelles2701@gmail.com',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHLId1sh1tzmA/profile-displayphoto-shrink_800_800/0?e=1613001600&v=beta&t=J9EWfnzmELZ4_rpDVEoLoV6_HT5R4v5_PtvfByf9SPo',
        description: 'I consider myself a responsible and nempathetic person, and a good work partner, with contagious joy. I love bad jokes, good food and making people laugh. ',
        role: 'HOST',
       
    },
    {
        username: "belen",
        password: hashPass1,
        name: 'Belen Olias',
        email: 'garguelles2701@gmail.com',
        image: 'https://res.cloudinary.com/nataliafndz26/image/upload/v1607772462/Onmyway/noxsgkajxn8f2tujh8f4.jpg',
        description: 'Always trying to think outside the box. Connecting the dots. Enthusiastic reader. Keep learning everyday! ',
        role: 'HOST',
       
    },
    {
        username: "natalia",
        password: hashPass1,
        name: 'Natalia Fernandez',
        email: 'gonar2795@gmail.com',
        image: 'https://res.cloudinary.com/nataliafndz26/image/upload/v1607772753/Onmyway/gxd6fgicwyxzmpcswqnt.jpg',
        description: 'I love to travel around the world, helping people, caring and giving a hand always that´s needed. My pasions are music, learning new languages, animals, and children :)',
        favourites: [],
        role: 'USER',
  
    },
    {
        username: "gonza",
        password: hashPass1,
        name: 'Gonzalo Argüelles',
        email: 'gonar2795@gmail.com',
        image: 'https://res.cloudinary.com/nataliafndz26/image/upload/v1607771571/Onmyway/zjmbjxk5ijzbdhljo3r6.png',
        description: 'Pasionate traveller, food lover and nature enthusiast',
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
        interests: ['Sabbatical Year', 'Self-knowledge', 'Travel Alone', 'Backpacker', 'Try New Foods'],
        continent: 'South America',
        skills: ['Ecological activities', 'Working with animals', 'Cleaning'],
        time: '0-6 months'
    },
    {
        interests: ['Professional Development', 'Travel Alone', 'Couple Travel', 'Learn Languages'],
        continent: 'Central America',
        skills: ['Working with guests', 'Cleaning','Community work'],
        time: '0-6 months',
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Travel Alone', 'Learn Languages', 'Spiritual Development'],
        continent: 'North America',
        skills: ['Working with guests', 'Cleaning', 'Working with animals', 'Ecological activities'],
        time: '6 months-1 year'
    },
    {
        interests: ['Professional Development', 'Couple Travel','Try New Foods'],
        continent: 'North America',
        skills: ['Working with guests', 'Cleaning', 'Cooking'],
        time: '0-6 months'
    },
    {
        interests: ['Sabbatical Year', 'Self-knowledge', 'Spiritual Development'],
        continent: 'Central America',
        skills: ['Cleaning', 'Community work', 'Working with animals', 'Ecological activities'],
        time: '6 months-1 year'
    },
    {
        interests: ['Professional Development', 'Travel Alone', 'Digital Nomadism', 'Learn Languages'],
        continent: 'North America',
        skills: ['Working with guests', 'Cleaning', 'IT'],
        time: 'More than 1 year'
    },
    {
        interests: ['Professional Development', 'Digital Nomadism', 'Try New Foods', 'Spiritual Development'],
        continent: 'Africa', 
        skills: ['Community work', 'IT'],
        time: '6 months-1 year'
    },
    {
        interests: ['Sabbatical Year', 'Professional Development', 'Self-knowledge', 'Try New Foods'],
        continent: 'Africa',
        skills: ['Teaching', 'Cooking', 'Community work'],
        time: 'More than 1 year'
    },
    {
        interests: ['Sabbatical Year', 'Self-knowledge', 'Learn Languages', 'Try New Foods'],
        continent: 'Africa',
        skills: ['Teaching', 'Community work'],
        time: '6 months-1 year'
    },
    {
        interests: ['Professional Development', 'Self-knowledge', 'Learn Languages', 'Backpacker'],
        continent: 'Oceania',
        skills: ['Working with guests', 'Cleaning', 'Cooking'],
        time: 'More than 1 year'
    },
    {
        interests: ['Professional Development', 'Travel Alone', 'Digital Nomadism'],
        continent: 'Oceania',
        skills: ['IT'],
        time: '0-6 months'
    },
    {
        interests: ['Professional Development', 'Travel Alone', 'Backpacker', 'Spiritual Development'],
        continent: 'Oceania',
        skills: [ 'Community work'],
        time: '0-6 months'
    },
    {//nuestras
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
    .then(() => User.findByIdAndUpdate(theUsers[4], { preferences: thePreferences[24] }, { new: true }))
    .then(() => User.findByIdAndUpdate(theUsers[5], { preferences: thePreferences[25] }, { new: true }))

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
    .then(() => Job.findByIdAndUpdate(theJobs[11], { preferences: thePreferences[11], user: theUsers[3] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[12], { preferences: thePreferences[12], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[13], { preferences: thePreferences[13], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[14], { preferences: thePreferences[14], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[15], { preferences: thePreferences[15], user: theUsers[3] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[16], { preferences: thePreferences[16], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[17], { preferences: thePreferences[17], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[18], { preferences: thePreferences[18], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[19], { preferences: thePreferences[19], user: theUsers[3] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[20], { preferences: thePreferences[20], user: theUsers[0] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[21], { preferences: thePreferences[21], user: theUsers[1] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[22], { preferences: thePreferences[22], user: theUsers[2] }, { new: true }))
    .then(() => Job.findByIdAndUpdate(theJobs[23], { preferences: thePreferences[23], user: theUsers[3] }, { new: true }))

    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close())


