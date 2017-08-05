var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

let basicCard = BasicCard("Who was the first president of the United States?", "George Washington");
let clozeCard = ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log("Full Text: ", clozeCard.text);
console.log("Cloze Text: ", clozeCard.cloze);
console.log("Question Text: ", clozeCard.partialText);

console.log("Front Text: ", basicCard.front);
console.log("Back Text: ", basicCard.back);
