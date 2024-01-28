import chatHistory from "./datas/001_randomChatHistory.json";

type ChatHistory = {
  timestamp: number;
  chatRoomId: string;
  senderId: string;
  message: string;
};

class Chat {
  public chatHistory: ChatHistory[] = [];

  public mostTalkativePerson: string = "";
  public mostTalkativeInRoom: { [roomId: string]: string } = {};
  public mostbusiestPerson: string = "";

  private talkedCount: { [senderId: string]: number } = {};
  private talkCountPerRoom: { [chatRoomId: string]: { [senderId: string]: number } } = {};
  private roomsPerUser: { [userId: string]: Set<string> } = {};

  private updateTalkedCount(senderId: string) {
    if (this.talkedCount[senderId]) {
      this.talkedCount[senderId] += 1;
    } else {
      this.talkedCount[senderId] = 1;
    }
  }
  private updateMostTalkativePerson(senderId: string) {
    if (
      !this.mostTalkativePerson ||
      this.talkedCount[senderId] > this.talkedCount[this.mostTalkativePerson]
    ) {
      this.mostTalkativePerson = senderId;
    }
  }

  private updateMostTalkativeInRoom(roomId: string, senderId: string) {
    const talkCountRoom = this.talkCountPerRoom[roomId];
    const talkativePerson = this.mostTalkativeInRoom[roomId];

    const talkCountOfTalkativePerson = talkCountRoom[talkativePerson];

    if (talkCountOfTalkativePerson < this.talkCountPerRoom[roomId][senderId]) {
      this.mostTalkativeInRoom[roomId] = senderId;
    }
  }
  private updateTalkedCountPerRoom(roomId: string, senderId: string) {
    if (this.talkCountPerRoom[roomId]) {
      if (this.talkCountPerRoom[roomId][senderId]) {
        this.talkCountPerRoom[roomId][senderId] += 1;
      } else {
        this.talkCountPerRoom[roomId][senderId] = 1;
      }
      this.updateMostTalkativeInRoom(roomId, senderId);
    } else {
      this.talkCountPerRoom[roomId] = { [senderId]: 1 };
      this.mostTalkativeInRoom[roomId] = senderId;
    }
  }

  private updateMostBusiestPerson(senderId: string, participatedRoomsSize: number) {
    if (
      !this.mostbusiestPerson ||
      this.roomsPerUser[this.mostbusiestPerson].size < participatedRoomsSize
    ) {
      this.mostbusiestPerson = senderId;
    }
  }
  private updateRoomsPerUser(roomId: string, senderId: string) {
    if (this.roomsPerUser[senderId]) {
      const participatedRooms = this.roomsPerUser[senderId];
      participatedRooms.add(roomId);
      this.updateMostBusiestPerson(senderId, participatedRooms.size);
    } else {
      this.roomsPerUser[senderId] = new Set([roomId]);
    }
  }

  constructor(chatHistory: ChatHistory[]) {
    this.chatHistory = chatHistory;

    for (let history of this.chatHistory) {
      const senderId = history["senderId"];
      const roomId = history["chatRoomId"];

      this.updateTalkedCount(senderId);
      this.updateMostTalkativePerson(senderId);

      this.updateTalkedCountPerRoom(roomId, senderId);

      this.updateRoomsPerUser(roomId, senderId);
    }
  }

  getMostTalkativePerson(): string {
    return this.mostTalkativePerson;
  }

  getMostTalkativePersonPerRoom() {
    return this.mostTalkativeInRoom;
  }

  getBusiestPerson() {
    return this.mostbusiestPerson;
  }
}

const instaChat = new Chat(chatHistory);
console.log(instaChat.getMostTalkativePerson());
console.log(instaChat.getMostTalkativePersonPerRoom());
console.log(instaChat.getBusiestPerson());
