// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #



//so basically have to check if its space # or # space in the loop, maybe a switch case could be used here since there are only 2 options, this one seems hard. i think looping string concatenation might be a way to do this also but im not sure how i would get it to alternate, maybe theres another thing like

for(let i = 1; i <= 8; i++){
    if (i % 2 == 0) {
        console.log("# # # #");
    } else {
        console.log(" # # # #");
    }
}


//im not sure if this is the 'best' way to do it, but it works so I'm not going to complain lol.