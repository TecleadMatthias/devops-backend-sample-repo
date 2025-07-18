db = db.getSiblingDB("got_db")

db.createUser({
    user: "Peter",
    pwd: "Peter"
})

db.createCollection("books")

db.books.insertMany([
    {
        name: "Bibel", 
        author: "Gott", 
        year: 0
    },
    {
        name: "Telefonbuch", 
        author: "Angela Merkel", 
        year: 2002
    },
])