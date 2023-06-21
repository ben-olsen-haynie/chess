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

    // the way to dig values out of objects is (usually) with the dot operator (.)
    // the way to dig values of of arrays is (usually) with bracket notation e.g. []

    // Challenge 5.0: declare a variable named `animals`
    // make the value of that variable an array which has 5 strings.
    // each string should be the name of a different animal

    const animals = ["cat", "dog", "aligator", "monkey", "shark"]
    console.log(animals[0])

    // Challenge 5.1: use a loop to iterate over the array `animals`
    // I want you to console.log() each individual element in the array.
    
    for (let i = 0; i <= 4; i++) {
        console.log(animals[i])
    }

    // Challenge 5.1: Arrays have a method called .push()
    // when you use .push() on an array it adds an element to the end
    // ex: animals.push('tiger')
    // I want you to add an element to the array using the .push() method
    // and then I want you to loop over the array and print each element out again.
    
    animals.push("parrot")
    for (let i = 0; i < 6; i++) {
        console.log(animals[i])
    }

    // Challenge 5.2: Arrays have a property called .length
    // I want you to console.log the length of the `animals` array

    console.log(animals.length)

    // Challenge 5.3: Now I want you to loop over the elements of the array
    // use the `.lenghth` property instead of hard-coding 6

    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i])
    }

    // Challenge 5.4: Now do the same thing, but skip the first element (cat)

    for (let i = 1; i < animals.length; i++) {
        console.log(animals[i])
    }

    // Challenge 5.5: Now loop through the whole array
    // But this time, loop through it backwards starting at parrot
    // and ending at cat

    for (let i = 5; i >= 0; i--) {
        console.log(animals[i])
    }

    // Challenge 5.6: Now do the same thing
    // This time use the `.length` property
    // instead of hard-coding 5

    for (let i = animals.length - 1; i >= 0; i--) {
        console.log(animals[i])
    }

    // Challenge 6.0: create a new array named `colors`
    // fill the array with 5 strings - each the name of a color
    // console.log it.

    const colors = ["red", "blue", "green", "yellow", "orange"]
    console.log(colors)

    // Challenge 6.1: I want you to iterate over the `colors` array
    // log each element
    // but this time, use a `while` loop instead of a `for` loop.$

    let i = 0;
    while (i < 5) {
        console.log(colors[i]);
        i++;
    }
    

    // Challenge 6.2: Do the same thing, but in reverse order

    i = colors.length - 1

    while (i >= 0) {
        console.log(colors[i]);
        i--;
    }

}
// Actually call the function defined above ^^
werePracticingHere()


