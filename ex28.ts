let age: number = 15;

if (age < 2) {
    console.log("Person is a baby.")
} else if (age >= 2 && age < 4) {
    console.log("Person is a todler.")
} else if (age >= 4 && age < 13) {
    console.log("Person is a kid.")
} else if (age >= 13 && age < 20) {
    console.log("Person is a teenager.")
} else if (age >= 20 && age < 65) {
    console.log("Person is an adult.")
} else if (age >= 65) {
    console.log("Person is older.")
}

