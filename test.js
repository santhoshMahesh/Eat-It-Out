let file=[
    {
        id:1,
        number:3
    },
    {
        id:2,
        number:3
    },
    {
        id:3,
        number:3
    },
    {
        id:4,
        number:3
    },
    {
        id:4,
        number:3
    },
]

let temp=file.find((item)=>item.id===2)
let index=file.findIndex((item)=>item.id===2)
temp=file[index].number-1

file[index].number=temp

console.log(file)