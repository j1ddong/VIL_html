import chatHistory from "./datas/001_randomChatHistory.json";

const result: {
  mostTalkativePerson: string;
  mostTalkativeInRoom: { [roomId: string]: string };
  mostBusyPerson: string;
} = { mostTalkativePerson: "", mostTalkativeInRoom: {}, mostBusyPerson: "" };

const talkedCount: { [senderId: string]: number } = {};
const roomsPerUser: { [userId: string]: Set<string> } = {};
const talkCountPerRoom: { [chatRoomId: string]: { [senderId: string]: number } } = {};

for (let history of chatHistory) {
  const userId = history["senderId"];
  const roomId = history["chatRoomId"];

  if (roomsPerUser[userId]) {
    const participatedRooms = roomsPerUser[userId];
    participatedRooms.add(roomId);

    const busiestPerson = result.mostBusyPerson;

    if (!busiestPerson || roomsPerUser[busiestPerson].size < participatedRooms.size) {
      result.mostBusyPerson = userId;
    }
  } else {
    roomsPerUser[userId] = new Set([roomId]);
  }

  const talkativePerson = result.mostTalkativePerson;
  if (talkedCount[history["senderId"]] != undefined) {
    talkedCount[history["senderId"]] += 1;
  } else {
    talkedCount[history["senderId"]] = 1;
  }
  if (!talkativePerson || talkedCount[history["senderId"]] > talkedCount[talkativePerson]) {
    result.mostTalkativePerson = history["senderId"];
  }

  if (talkCountPerRoom[roomId]) {
    if (talkCountPerRoom[roomId][userId]) {
      talkCountPerRoom[roomId][userId] += 1;
    } else {
      talkCountPerRoom[roomId][userId] = 1;
    }

    const talkCountRoom = talkCountPerRoom[roomId];
    const talkativePersonRoom = result.mostTalkativeInRoom[roomId];

    const talkCountOfTalkativePerson = talkCountRoom[talkativePersonRoom];

    if (talkCountOfTalkativePerson < talkCountPerRoom[roomId][userId]) {
      result.mostTalkativeInRoom[roomId] = userId;
    }
  } else {
    talkCountPerRoom[roomId] = { [userId]: 1 };
    result.mostTalkativeInRoom[roomId] = userId;
  }
}
console.log(result);
