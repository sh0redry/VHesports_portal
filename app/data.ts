export const telegramUrl = "https://t.me/+YUCFw4DIoPc3NTM1";
export const asset = (name: string) => `/images/source/${encodeURIComponent(name)}`;

export const games = {
  mobile: [
    ["Mobile Legends", "Mobile LOL.png"],
    ["Honor of Kings", "mobile honor of king.png"],
  ],
  pc: [
    ["VALORANT", "Valorant.png"],
    ["Counter-Strike 2", "CS2.png"],
  ],
};

export const committee = [
  { name: "Song Xinhang", roles: ["Leader", "Vice Leader - Mobile Games"], photo: "Song xinhang photo.jpg", telegram: "@Song_Xinhang" },
  { name: "Zhao Dingjia", preferred: "Justin", roles: ["Vice Leader", "Leader - PC Games"], photo: "Zhao Dingjia photo.jpg", telegram: "@Justin_Zha0" },
  { name: "Xiao Yadan", roles: ["Leader - Mobile Games"], photo: "Xiao Yadan photo.jpg", telegram: "@Angelina_XYD" },
  { name: "Kyler Zhao", roles: ["Vice Leader - PC Games"], photo: "Kyler Zhao photo.jpg", telegram: "@KylerZhao" },
  { name: "Gary Yang", roles: ["Logistics"], photo: "Gary Yang photo.jpg", telegram: "@Gy_yang" },
];
