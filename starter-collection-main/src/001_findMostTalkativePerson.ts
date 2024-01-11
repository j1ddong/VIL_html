import chatHistory from "./001_randomChatHistory.json";

const talkedCount: { [senderId: string]: number } = {};
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
