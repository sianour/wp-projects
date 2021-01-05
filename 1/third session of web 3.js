////use filter arrey method

let numbers = [1, -1, 2, -2, -3, 3]
let filteredNumber = numbers.filter(function(PositiveNumbers){
    return PositiveNumbers >=0
})
console.log(filteredNumber)

let filtered = numbers.filter(PN => PN >=0)
console.log(filtered)

///use find arrey method

let peaples = [
    {
        name: "sepehr",
        occupation: "doctor"
    },

    {
        name:"korosh",
        occupation: "soldier"

    },

    {
        name:"mehrdad",
        occupation: "civil engineer"
    },

    {
        name:"amir",
        occupation: "thief"
    },
    {
        name:"mostafa",
        occupation: "thief"
    }

]

let result = peaples.find(function (person){
    return person.occupation === "thief"
})
console.log(result)

let res = peaples.find(jobs => jobs.occupation === "thief")
console.log(res)




