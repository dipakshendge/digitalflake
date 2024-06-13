route information

for rsgistration
localhost:5000/api/auth/register
data
{
        "username":"Dipak", 
        "email":"dipak@gmail.com", 
        "phone":"1234567891", 
        "password":"Dipak123"
}

for login
localhost:5000/api/auth/login

{
    "email":"dipak@gmail.com",
    "password":"Dipak"
}

below login all route require token for access

add city
localhost:5000/api/data/city
{
    "cityName": "Pune",
    "cityCode": "270",
    "state": "Maharashtra"
}

add state

localhost:5000/api/data/state
{
    "stateName": "Bihar",
    "stateCode": "4"
}


_____GET DATA FROM DB_____
get city data
localhost:5000/api/data/cities

get state data
localhost:5000/api/data/states

get wearhouse data
localhost:5000/api/data/wearhouses



________ADD DATA________ 

add wearhouse
localhost:5000/api/data/wearhouse

{
    "name": "sample",
    "state":"Maharashtra",
    "city": "Sangli"
}


_______deleting data from DB_______


delete wearhouse
localhost:5000/api/data/wearhouse/66681e0b6faaf0e7b9710737  (_id)

delete city
localhost:5000/api/data/city/666819d58376aac44efbc9fa  (_id)

delete state
localhost:5000/api/data/wearhouse/66681bf9e8ee5833ab3f634c  (_id)

__________Update Data in DB__________

Update wearhouse data
localhost:5000/api/data/wearhouse/66682e90dabfe03f724b00ee (_id)

Update City Data
localhost:5000/api/data/city/66681faf6e45ef1051051845 (_id)

Update state data
localhost:5000/api/data/wearhouse/66681bf9e8ee5833ab3f634c  (_id)