function werePracticingHere() {
    // Challenge 1. Create a variable that has the string of your name.
    var name = "Ben Haynie";

    // Challenge 1.1 Write the `name` variable out to the console.
    console.log(name)

    // Challenge 2. Create an array which has 3 strings. The strings should be your first, middle and last names.
    // The array should be stored in a variable that you can name whatever you want.

    const names = ["Ben", "Olsen", "Haynie"]

    // Challenge 2.1: Log this out so you can see it in the console.

    console.log(names)

    // Challenge 2.2: Using the `names` variabe, log only your middle name to the console.
    
    console.log(names[1])

    // Challenge 2.3: Using the `names` variable log your first name, then log your last name, then log your middle name.
    
    console.log(names[0])
    console.log(names[2])
    console.log(names[1])


    // Challenge 3.0: Create a variable named `myObj` and assign it a value of <empty object>
    const myObj = {}
    console.log(myObj)

    // Challenge 3.1: Update the `myObj` variable so that it has a property `name`. And that property has the value "Ben".
    myObj.name = "Ben"
    console.log(myObj)

    // Challenge 3.2 Update the `myObj` variable so that it has a proprty `age` 
    // and that property value is an integer representing your current age.
    myObj.age = 20
    console.log(myObj)

    // Challenge 3.3 Update the `myObj` variable so that it has a property `skillz`
    // The value of `skillz` should be an array which has 3 strings in it.
    myObj.skillz = ["piano", "singing", "hackySack"]
    console.log(myObj)

    // Challenge 3.4: Using the `myObj` variable, print just your name out to the console.
    console.log(myObj.name)

    // Challenge 3.5: Using the `myObj` variable, print just your age out to the console.
    console.log(myObj.age)

    // Challenge 4.0: Create another variable called `obj2` and
    //  put Dean's info in it. I'm 27, and I can code, piano, and volleyball.
    const obj2 = {
        name: "Dean",
        age: 27,
        skillz: ["coding", "piano", "vollyball"]
    }
    console.log(obj2)

    // Challenge 4.1: Log to the console a string. Use `myObj` while you create this string.
    // The string should say "Hi my name is <your name>. I am <your age> years old."
    // First use string interpolation (e.g. `${}`)
    // Then do it again but use string concatenation e.g. ("hello" + "world")
    // Do it one more time using single quotes and string concatenation.
    // Do it one more time using string-template (back-ticks: ``) ...
    /// ... but don't use interpolation, use concatenation.
    console.log(`Hi my name is ${myObj.name}. I am ${myObj.age} years old.`)
    console.log("Hi my name is " + myObj.name + ". I am " + myObj.age + " years old.")
    console.log('Hi my name is ' + myObj.name + '. I am ' + myObj.age + ' years old.')
    console.log(`Hi my name is ` + myObj.name + `. I am ` + myObj.age + ` years old.`)

    const myArray = ["coding", 15, { name: "Ben" }, [1, 2, 3]]
    console.log(myArray[2].name)
    console.log(myArray[3][2])

}
// Actually call the function defined above ^^
werePracticingHere()



