db.people.aggregate([
    {$match: {age: {$gt: 35}}},
    {$project: {
        _id: 0,
        upper_case_full_name: {$concat: [{$toUpper: '$firstName'} , ' ', {$toUpper: '$lastName'}]},
        country: '$address.city',
        house_number: '$address.houseNumber',
        age: 1
    }}
])
