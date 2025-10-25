// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #


//maybe i should've done height = 7 and start the loops at 1, but this is just what i know
let height = 8;

//i was trying to do nested for loops before like I did with C, but the repeat doesnt require that
for(let i = 0; i < height / 2; i++) {
    console.log("#".repeat(i));
}

for( let i = height / 2; i >= 0; i--) {
    console.log("#".repeat(i));
}
