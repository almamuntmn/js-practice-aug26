// This 


// console.log(this === module.exports)

// console.log(module)

// function myFunc(){
//     console.log(this)
// }

// myFunc()


const person = {
    name: "Mamun",
    age: 32,
    showName: function(){
        console.log(this.name)
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}

person.showName()

