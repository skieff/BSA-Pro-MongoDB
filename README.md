##Hometask for MongoDB group

###V3

- Make query to find all peoples with age greater then 35 and show found results in given form

```javascript
    {
	    upper_case_full_name, // firstName + lastName to uppercase 
	    country, // (address.city)
	    house_number // address.houseNumber
	    age 
    }
```

- Make query which will produce list of interests for top 3 countries ordered by average age and show results in such form

```javascript
    {
	    country, 
	    interests, //array of unique interests in country
	    avg_age
    }
```

###V1
- Install MongoDB
- Start up server and connect to it using cli tool
- Execute data generation script to fill database
- Create query to select all developers who interested in C# and Javascript aged between 19 and 28 (included)
- Create query to change country from Russia to Ukraine for all who interested in Ruby.