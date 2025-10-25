// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let height = 7;

for(let i = 0; i < height; i++) {
    for(let j = 0; j < height - i; j++) {
        console.log(`#`.repeat(i));
    }
    console.log("2");
}
console.log(" ");