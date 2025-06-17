const obj_arr = [
    {
        name: "John",
        grade: 9
    },
    {
        name: "Meggie",
        grade: 10
    },
    {
        name: "Michael",
        grade: 5
    },
    {
        name: "Donald",
        grade: 1
    }
]

function gradeGratterThanSix(arr) {
    return arr.filter((obj) => obj.grade >= 6)
}

const aproved = gradeGratterThanSix(obj_arr);

console.log(aproved)
