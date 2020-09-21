var firstName = prompt("Enter your First Name:")
var lastName = prompt("Enter your Last Name:")
var age = prompt("Enter Your Age:")
var height = prompt("Height")
var petName = prompt("Enter Your Pet Name")

if ((firstName[0] === lastName[0]) && (age >= 20 && age < 30) && (height >= 170) && (petName[petName.length - 1] === 'y')){
    console.log('Hey Buddy Welcome Back!')
}  else{
    console.log('Who the hell are you?')
}
alert("Thank you for the Datails")