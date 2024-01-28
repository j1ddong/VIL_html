const chatHistory = require("./datas/001_randomChatHistory.json");

const talkedCount = {};
let talkativePerson;

for (let obj of chatHistory) {
  if (talkedCount[obj["senderId"]] != undefined) {
    talkedCount[obj["senderId"]] += 1;
  } else {
    talkedCount[obj["senderId"]] = 1;
  }
  if (!talkativePerson || talkedCount[obj["senderId"]] > talkedCount[talkativePerson]) {
    talkativePerson = obj["senderId"];
  }
}

console.log(talkativePerson);
