console.log("The following years between 2000 and 3000 are leap years:")

for (let i = 2000; i < 3000; i++) {
    if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
        console.log(i);
    }
}
