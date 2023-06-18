
let db = require('./env/mongo_url');
let modperson = require('./env/person_model');
// let person1 = new modperson({
//     name: "sami",
//     age: 24,
//     favoriteFoods: ["pizza", "cofee"]
// })
// person1.save().then(doc => {
//     console.log(doc)
// })
//     .catch(err => {
//         console.error(err)
//     });
// async function arrayOfPeople() {
//     try {
//         const people = await modperson.create([
//             {
//                 name: "ahmed",
//                 age: 33,
//                 favoriteFoods: ["cake"]
//             },
//             {
//                 name: "fawzi",
//                 age: 28,
//                 favoriteFoods: ["milk", "strawberry"]
//             }
//         ]);
//         console.log(people);
//     } catch (err) {
//         console.error(err);
//     }
// }

// arrayOfPeople();
// modperson.find({
//     name: 'sami'
// })
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     })
// modperson.findOne({
//     favoriteFoods: "cake"
// }).then(doc => {
//     console.log(doc)
// })
//     .catch(err => {
//         console.error(err)
//     })
// async function personId(_id) {
//     try {
//         const people = await modperson.find({ _id });
//         console.log(people);
//     } catch (err) {
//         console.error(err);
//     }
// }

// personId("648dece33b1a140046107a35");
//Function to find a person by _id, add "hamburger" to favoriteFoods, and save the updated person
// async function updateFavoriteFoodsById(personId) {
//     try {
//         const person = await modperson.findById(personId);
//         if (!person) {
//             console.log("Person not found");
//             return;
//         }

//         person.favoriteFoods.push("hamburger");

//         const updatedPerson = await person.save();
//         console.log(updatedPerson);
//     } catch (err) {
//         console.error(err);
//     }
// }

// // Provide the person's _id as the argument
// updateFavoriteFoodsById("648edb44f09df43cce08f31d");
modperson.findOneAndRemove({
    name: "sami"
}).then(response => {
    console.log(response)
})
    .catch(err => {
        console.error(err)
    })
