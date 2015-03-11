db.people.find({
    $and: [
        {interests: {$in: ['C#', 'JavaScript']}},
        {age: {$gte: 19}},
        {age: {$lte: 28}}
    ]
})