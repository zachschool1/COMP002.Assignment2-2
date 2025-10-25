// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let height = 8;

//i was trying to do nested for loops before like I did with C, but the repeat doesnt require that
for(let i = 0; i < height / 2; i++) {
    console.log("#".repeat(i));
}

for( let i = height / 2; i >= 0; i--) {
    console.log("#".repeat(i));
}
