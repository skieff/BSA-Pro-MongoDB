db.people.aggregate([
    {$project: {
        _id: 0,
        country: '$address.city',
        interests: 1,
        age: 1
    }},
    {$unwind: '$interests'},
    {$group: {
        _id: "$country",
        interests: {$addToSet: "$interests"},
        avg_age: {$avg: "$age"}
    }},
    {$sort: {avg_age: -1}},
    {$limit: 3},
    {$project: {
        _id: 0,
        country: '$_id',
        interests: 1,
        avg_age: 1
    }}
])
