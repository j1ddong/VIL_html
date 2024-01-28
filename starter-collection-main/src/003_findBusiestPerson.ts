import chatHistory from "./datas/001_randomChatHistory.json";

//방에 제일 많이 참여한 유저
let busiestPerson: string = "";
const roomsPerUser: { [userId: string]: Set<string> } = {};
// {'userId': set()}

for (let history of chatHistory) {
  const userId = history["senderId"];
  const roomId = history["chatRoomId"];
  if (roomsPerUser[userId]) {
    const participatedRooms = roomsPerUser[userId];
    participatedRooms.add(roomId);
    if (!busiestPerson || roomsPerUser[busiestPerson].size < participatedRooms.size) {
      busiestPerson = userId;
    }
  } else {
    roomsPerUser[userId] = new Set([roomId]);
  }
}
console.log(busiestPerson);
