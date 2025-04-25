const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "anya",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি আবাল দের সাথে কথা বলি না,ok😒",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস করি🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == )) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) ||(event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == )) {
     return api.sendMessage("Yo What's up ", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "Rohit") || (event.body.toLowerCase() == "@Arara Kaizaki") || (event.body.toLowerCase() == " Rohit")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Arata Kaizaki ☜\𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Rohit.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :-https://www.facebook.com/share/19CHrrWkd1/তার সাতে যোগা যোগ করবেন WhatsApp :- ", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage("My Creator:Arata kaizaki ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস রহিত আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Admin")) {
     return api.sendMessage("He is Arata ❤️ তাকে সবাই রহিত নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chop") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami Rohit") || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Yumisoki haroka") || (event.body.toLowerCase() == )) {
     return api.sendMessage("খবরদার কেউ এই আইডি মেনশন দিবানা এটা আমার বস রহিত এর বউ এর আইডি😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "anya") || (event.body.toLowerCase() == )) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রহিত এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস উল্লাস এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "aliza") || (event.body.toLowerCase() == "maya")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রহিত এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@Yuta okkotsu ") || (event.body.toLowerCase() == "নাদিম")) {
     return api.sendMessage("🥰-নাদিম🌺 আমার বস রহিত'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা রহিতকে দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == )) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Tor nam ki") || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("️MY NAME IS °_>Anya Forger", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "bot er bacca")) {
     return api.sendMessage("️ বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "oiiii") || (event.body.toLowerCase() == )) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "chudi") || (event.body.toLowerCase() == )) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == )) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/তোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🐸", threadID);
   };

   if ((event.body.toLowerCase() == "Kemon aso") || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == )) {
     return api.sendMessage("মন খারাপ করে কিছুই হবে না...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("", threadID);
   };

     if ((event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == ) || (event.body.toLowerCase() == )) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("না জান 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake valobaso") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("হুম জান আমি তোমাকে রাইতে ভলোবাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == ) || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
  mess = "{Anya}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
