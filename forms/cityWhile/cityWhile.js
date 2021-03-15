var cities = []
let enterMore = true

while(enterMore == true) {
    city = prompt("Enter a city(type 'stop' to finish your list)")
    city = city.toString().LowerCase()
    if(city =='stop') {
        enterMore = false
        } else {
        cities.push(city)
        }
}

var i = 0
while(cities[i]) {
    console.log(cities[i])
    i++
}