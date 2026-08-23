export const telegramUrl = "https://t.me/+YUCFw4DIoPc3NTM1";
export const asset = (name: string) => `/images/source/${encodeURIComponent(name)}`;

export const games = {
  mobile: [
    ["Mobile Legends", "mobile game3.jpg"], ["Honor of Kings", "mobile game4.jpg"], ["PUBG Mobile", "mobile game5.jpg"], ["Call of Duty: Mobile", "mobile game6.jpg"],
  ],
  pc: [
    ["VALORANT", "PC game1.jpg"], ["League of Legends", "pc game2.png"], ["EA SPORTS FC", "pc game3.png"], ["Counter-Strike 2", "pc game4.png"], ["Minecraft", "pc game5.png"],
  ],
};

export const committee = [
  { name: "Song Xinhang", roles: ["Leader", "Vice Leader - Mobile Games"], photo: "Song xinhang photo.jpg" },
  { name: "Zhao Dingjia", preferred: "Justin", roles: ["Vice Leader", "Leader - PC Games"], photo: "Zhao Dingjia photo.jpg" },
  { name: "Xiao Yadan", roles: ["Leader - Mobile Games"], photo: "Xiao Yadan photo.jpg" },
  { name: "Kyler Zhao", roles: ["Vice Leader - PC Games"], photo: "Kyler Zhao photo.jpg" },
  { name: "Gary Yang", roles: ["Logistics"], photo: "Gary Yang photo.jpg" },
];
