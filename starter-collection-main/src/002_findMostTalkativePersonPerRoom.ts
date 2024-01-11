import chatHistory from "./001_randomChatHistory.json";

const talkativePersonPerRoom: { [chatRoomId: string]: string } = {};
// {'chatRoomId': 'senderId'}
const talkCountPerRoom: { [chatRoomId: string]: { [senderId: string]: number } } = {};
// {'chatRoomId': {'senderId': count}}

for (let history of chatHistory) {
  const chatRoomId = history["chatRoomId"];
  const senderId = history["senderId"];
  if (talkCountPerRoom[chatRoomId]) {
    // 채팅방이 있으면 sender 같은 거 잇는지 확인
    if (talkCountPerRoom[chatRoomId][senderId]) {
      talkCountPerRoom[chatRoomId][senderId] += 1;
    } else {
      talkCountPerRoom[chatRoomId][senderId] = 1;
    }

    const talkCountRoom = talkCountPerRoom[chatRoomId];
    const talkativePersonRoom = talkativePersonPerRoom[chatRoomId];

    const talkCountOfTalkativePerson = talkCountRoom[talkativePersonRoom];

    const mostTalkativePerson = talkCountPerRoom[chatRoomId][talkativePersonPerRoom[chatRoomId]];
    if (mostTalkativePerson < talkCountPerRoom[chatRoomId][senderId]) {
      talkativePersonPerRoom[chatRoomId] = senderId;
    }
  } else {
    // 채팅방이 없으면 sender 설정
    talkativePersonPerRoom[chatRoomId] = senderId;
    talkCountPerRoom[chatRoomId] = { [senderId]: 1 };
  }
}
console.log(talkativePersonPerRoom);
