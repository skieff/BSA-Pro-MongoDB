db.people.update(
    {
        'interests': 'Ruby',
        "address.city": 'Russian Federation'
    },
    {
        $set: {"address.city": 'Ukraine'}
    },
    { multi: true}
)