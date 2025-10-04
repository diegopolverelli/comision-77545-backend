db.createCollection("alumnos");
db.alumnos.insertOne({ "id": 98, "nombre": "Julian", "apellido": "Alvarez" });

db.alumnos.insertOne({ "id": 99, "nombre": "Marcela", "email": "marce2020@test.com" });


db.heroes.insertMany(
    [
        {
            id: 1,
            name: "Spider-Man",
            alias: "Peter Parker",
            powers: ["Wall-crawling", "Superhuman strength"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Green Goblin", powers: ["Advanced technology", "Glider"] },
                { name: "Venom", powers: ["Symbiote bonding", "Superhuman strength"] },
                { name: "Doctor Octopus", powers: ["Mechanical arms", "Genius intellect"] },
                { name: "Sandman", powers: ["Shape-shifting sand body", "Superhuman strength"] }
            ]
        },
        {
            id: 2,
            name: "Superman",
            alias: "Clark Kent",
            powers: ["Superhuman strength", "Flight", "Heat vision"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Lex Luthor", powers: ["Genius intellect", "Wealth"] },
                { name: "Doomsday", powers: ["Invulnerability", "Adaptive evolution"] },
                { name: "Brainiac", powers: ["Advanced technology", "Superhuman intellect"] },
                { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
            ]
        },
        {
            id: 3,
            name: "Iron Man",
            alias: "Tony Stark",
            powers: ["Powered armor", "Genius-level intellect", "Flight"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Mandarin", powers: ["Rings of power", "Mystical abilities"] },
                { name: "Whiplash", powers: ["Whips with energy projection", "Engineering skills"] },
                { name: "Obadiah Stane", powers: ["Advanced technology", "Business acumen"] },
                { name: "Ultron", powers: ["Artificial intelligence", "Advanced weaponry"] }
            ]
        },
        {
            id: 4,
            name: "Wonder Woman",
            alias: "Diana Prince",
            powers: ["Superhuman strength", "Lasso of Truth"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Ares", powers: ["God of War", "Immortality"] },
                { name: "Cheetah", powers: ["Enhanced strength", "Agility"] },
                { name: "Circe", powers: ["Magic spells", "Immortality"] },
                { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
            ]
        },
        {
            id: 5,
            name: "Black Widow",
            alias: "Natasha Romanoff",
            powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
                { name: "Red Guardian", powers: ["Enhanced strength", "Soviet super-soldier serum"] },
                { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] }
            ]
        },
        {
            id: 6,
            name: "Batman",
            alias: "Bruce Wayne",
            powers: ["Intelligence", "Peak human physical condition", "Advanced technology", "Skilled hand-to-hand combatant"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Joker", powers: ["Criminal mastermind", "Maniacal humor"] },
                { name: "Two-Face", powers: ["Dual personality", "Coin-based decisions"] },
                { name: "Penguin", powers: ["Criminal underworld connections", "Trick umbrellas"] },
                { name: "Ra's al Ghul", powers: ["Immortality", "Martial arts mastery"] }
            ]
        },
        {
            id: 7,
            name: "Aquaman",
            alias: "Arthur Curry",
            powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Black Manta", powers: ["Advanced technology", "Underwater combat skills"] },
                { name: "Ocean Master", powers: ["Control over sea and weather", "Trident mastery"] },
                { name: "King Shark", powers: ["Superhuman strength", "Shark-like attributes"] }
            ]
        },
        {
            id: 8,
            name: "Captain America",
            alias: "Steve Rogers",
            powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Red Skull", powers: ["Superhuman intellect", "Adversarial combat skills"] },
                { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] },
                { name: "Crossbones", powers: ["Enhanced strength", "Expert combatant"] }
            ]
        },
        {
            id: 9,
            name: "Flash",
            alias: "Barry Allen",
            powers: ["Super speed", "Time travel", "Speed force manipulation"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Reverse-Flash", powers: ["Speedster abilities", "Time manipulation"] },
                { name: "Zoom", powers: ["Temporal manipulation", "Speedster abilities"] },
                { name: "Captain Cold", powers: ["Cryogenic weaponry", "Cold generation"] },
                { name: "Gorilla Grodd", powers: ["Telepathy", "Enhanced intelligence"] }
            ]
        },
        {
            id: 10,
            name: "Black Panther",
            alias: "T'Challa",
            powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Killmonger", powers: ["Enhanced strength", "Wakandan combat training"] },
                { name: "Man-Ape", powers: ["Enhanced strength", "Gorilla-like abilities"] },
                { name: "Klaw", powers: ["Sonic emitter", "Vibranium manipulation"] }
            ]
        },
        {
            id: 11,
            name: "Green Lantern",
            alias: "Hal Jordan",
            powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Sinestro", powers: ["Yellow power ring", "Fear manipulation"] },
                { name: "Atrocitus", powers: ["Red power ring", "Rage empowerment"] },
                { name: "Parallax", powers: ["Fear embodiment", "Reality manipulation"] }
            ]
        },
        {
            id: 12,
            name: "Thor",
            alias: "Thor Odinson",
            powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Loki", powers: ["Trickery", "Sorcery", "Reality manipulation"] },
                { name: "Hela", powers: ["Death magic", "Immortality"] },
                { name: "Malekith", powers: ["Dark magic", "Reality manipulation"] },
                { name: "Surtur", powers: ["Fire manipulation", "Giant form"] }
            ]
        },
        {
            id: 13,
            name: "Batwoman",
            alias: "Kate Kane",
            powers: ["Martial arts", "Detective skills", "Advanced technology"],
            team: "Bat Family",
            publisher: "DC",
            enemies: [
                { name: "Alice", powers: ["Madness manipulation", "Martial arts"] },
                { name: "Mad Hatter", powers: ["Mind control technology", "Obsession with hats"] },
                { name: "The Many Arms of Death", powers: ["Assassin skills", "Mercenary group"] }
            ]
        },
        {
            id: 14,
            name: "Hulk",
            alias: "Bruce Banner",
            powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Abomination", powers: ["Enhanced strength", "Regeneration"] },
                { name: "The Leader", powers: ["Genius intellect", "Gamma radiation manipulation"] },
                { name: "Red Hulk", powers: ["Superhuman strength", "Heat manipulation", "Invulnerability"] }
            ]
        },
        {
            id: 15,
            name: "Zatanna",
            alias: "Zatanna Zatara",
            powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
            team: "Justice League Dark",
            publisher: "DC",
            enemies: [
                { name: "Constantine", powers: ["Occult knowledge", "Hellblazer abilities"] },
                { name: "Nick Necro", powers: ["Dark magic", "Necromancy"] },
                { name: "Felix Faust", powers: ["Sorcery", "Dark rituals"] }
            ]
        },
        {
            id: 16,
            name: "Doctor Strange",
            alias: "Stephen Strange",
            powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
            team: "Defenders",
            publisher: "Marvel",
            enemies: [
                { name: "Baron Mordo", powers: ["Sorcery", "Dark magic"] },
                { name: "Dormammu", powers: ["Dark dimension ruler", "Reality manipulation"] },
                { name: "Shuma-Gorath", powers: ["Chaos magic", "Reality warping"] }
            ]
        },
        {
            id: 17,
            name: "Green Arrow",
            alias: "Oliver Queen",
            powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Deathstroke", powers: ["Enhanced strength", "Master tactician"] },
                { name: "Merlyn", powers: ["Expert marksman", "Assassin skills"] },
                { name: "Komodo", powers: ["Archery skills", "Biological enhancements"] }
            ]
        },
        {
            id: 18,
            name: "Scarlet Witch",
            alias: "Wanda Maximoff",
            powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
            team: "Avengers",
            publisher: "Marvel",
            enemies: [
                { name: "Agatha Harkness", powers: ["Witchcraft", "Mentor to Scarlet Witch"] },
                { name: "Chthon", powers: ["Elder God", "Dark magic"] },
                { name: "Magneto", powers: ["Magnetism manipulation", "Master strategist"] }
            ]
        },
        {
            id: 19,
            name: "Martian Manhunter",
            alias: "J'onn J'onzz",
            powers: ["Shape-shifting", "Telepathy", "Super strength"],
            team: "Justice League",
            publisher: "DC",
            enemies: [
                { name: "Ma'alefa'ak", powers: ["Fire manipulation", "Mental abilities"] },
                { name: "White Martians", powers: ["Advanced shape-shifting", "Psychic powers"] },
                { name: "Fernus", powers: ["Fire manipulation", "Psychic powers"] }
            ]
        },
        {
            id: 20,
            name: "Deadpool",
            alias: "Wade Wilson",
            powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
            team: "None",
            publisher: "Marvel",
            enemies: [
                { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
                { name: "Cable", powers: ["Telekinesis", "Time travel"] },
                { name: "Ajax", powers: ["Enhanced strength", "Regeneration"] }
            ]
        }
    ]
);

db.heroes.find();

db.heroes.find({ name: "Hulk" });
db.heroes.find({ publisher: "DC" });
db.heroes.find({ publisher: "DC", team: "Justice League" });

db.heroes.find(
    { publisher: "DC", team: "Justice League" },
    { name: 1, team: 1 }
);

db.heroes.find(
    { publisher: "DC", team: "Justice League" },
    { alias: 0, publisher: 0, enemies: 0, powers: 0, id: 0 }
);

// db.heroes.find(
//     {publisher:"DC", team: "Justice League"}, 
//     {name:1, team:1, enemies:0}
// );

db.heroes.find(
    { publisher: "DC", team: "Justice League" },
    { name: 1, team: 1, _id: 0 }
);

db.heroes.find(
    { publisher: "DC", team: "Justice League", name: "Superman" },
    { name: 1, team: 1, _id: 0 }
);

db.heroes.findOne(
    { publisher: "DC", team: "Justice League", name: "Superman" },
    { name: 1, team: 1, _id: 0 }
);

db.alumnos.insertMany([
    {
        nombre:'Ricardo', apellido:'Tapia'
    },
    {
        nombre:'Romina', apellido:'Gaitan'
    },
    {
        nombre:'Cristina', apellido:'Vallejos'
    },
    {
        nombre:'Jimena', apellido:'Rodriguez'
    },
]);

db.alumnos.find().count();

db.alumnos.countDocuments();

db.alumnos.estimatedDocumentCount();

// Filtros avanzados:
db.heroes.find(
    { id: 4 },
    { name: 1, team: 1, id: 1, _id: 0 }
);

db.heroes.find(
    { id: {$gte:10}, publisher: "Marvel" },
    { name: 1, team: 1, id: 1, _id: 0 }
);

db.heroes.find(
    { id: {$gte:10}, publisher: {$eq:"Marvel"} },
    { name: 1, team: 1, id: 1, _id: 0 }
);

db.heroes.find(
    { id: {$gte:10}, publisher: {$ne:"Marvel"} },
    { name: 1, team: 1, id: 1, _id: 0, publisher:1 }
);

db.heroes.find(
    { id: {$gte:10}, publisher: {$ne:"Marvel"} },
    { name: 1, team: 1, id: 1, _id: 0, publisher:1 }
);

db.heroes.find(
    { name: {$nin:["Superman", "Batman", "Hulk"]} },
    { name: 1, team: 1, id: 1, _id: 0, publisher:1 }
);

db.heroes.find(
    { name: {$in:["Superman", "Batman", "Hulk"]} },
    { name: 1, team: 1, id: 1, _id: 0, publisher:1 }
);



db.heroes.find(
    { 
        $or: [
            {name: {$in:["Superman", "Batman", "Hulk"]}},
            {id: {$lte:6}}
        ]
    },
    { name: 1, team: 1, id: 1, _id: 0, publisher:1 }
);


db.alumnos.find({nombre:{$exists:true}})

db.alumnos.insertMany([
    {
        apellido:'Gomez'
    },
    {
        username:'romi67', apellido:'Celman'
    },
    {
        edad:10, email:"pablito22@hotmail.com"
    },
]);

db.heroes.find({powers:{$size:2}})

// consultas avanzadas:
db.heroes.distinct("team");
db.heroes.distinct("team", {id:{$lt:10}});

db.heroes.find({"enemies.name":"Doomsday"});

db.heroes.find({
    $or:[
        {"enemies.name":"Doomsday"},
        {"enemies.name":"Red Skull"}
    ]
});

db.heroes.find({name:{$regex: /man/}});
db.heroes.find({name:{$regex: /man/}}, {_id:0, name:1});


db.heroes.find({
    $or:[
        {"enemies.name":"Doomsday"},
        {"enemies.name":{$regex: /red/i}}
    ]
});


// sort
db.heroes.find(
    {},
    {_id:0, name:1, alias:1, team:1}
).sort({team: 1, alias:-1});


db.heroes.find(
    {},
    {_id:0, id:1, name:1}
).sort({id: 1}).skip(6);


db.heroes.find( {publisher:"DC"}, { _id: 0, id: 1, name: 1 }). sort({ id: 1 }).skip(4);


db.heroes.deleteMany({publisher:"DC"});

db.heroes.updateMany({id:{$lte:5}}, {$set:{age:28}});
db.heroes.updateMany({id:{$lte:5}}, {$inc:{age:3}});

db.heroes.updateMany({id:{$gte:5}}, {$unset:{powers:1}});
db.heroes.updateMany({id:{$gte:5}}, {$unset:{team:1}});