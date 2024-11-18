//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349132126907";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNyc0ttblVrbEpvK0U5UzRCMnVFY3AyYVRmQ0VnTXFOaVRpd0tlRFNsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2JIZjdubVRIU2JtQzB5RTQweUU4TVA2QXFVeFQxYUxISzFsbUo4cDJEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTFpNNHc2bEczTWcxdVZLTjBXYXdkMC9BTkdWeUNrdTBwaU11S000NTJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrV1I3WDJiZnJXNHFYaU9uMzB1djFJYUdNcFpzZE51MW8wL1FMZWJaQ1dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPRXRDTDhEZHhqMlhFRnppSW5MYjJuN1laL0xkWFJveTlWZW0vb29PbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0TG4zbXdGanlacnR2VnJnSkk0TUExdG9BeHkycUVlTHhmK1d6RXJGem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RrNEU4dDdueG1jU3pPVUdrNEpMUVZlSkJGZjFZSDZReVZ1M3hhck4xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGt2cDVtYVpJZTN5UU9kUklRYThiaW9iVGpxZ1lkL25NYWY3bGRodDF4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo0L2s0RHpTU2NKZVd2ZUFjOVl2T3R5S1ZZVWV1bW1qbzhqbVZFKzVIUjRrd2JISFF0WnRxYlhEUjdxQ3pDVVdPK0ZGdy8rYm85QllocUhZYVpVSUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJkMGxxT1Q3bHcxUU1BSmFONG5EYVM5VXFSdVJOY1hxdEtMZ3dQZTJPZEpFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiM0hGZVEyWlF2MnBoLVp2OUFtM2FBIiwicGhvbmVJZCI6ImJmZTA2ZDg5LWNkNDMtNDEwZC1hMjYwLTkzMjQ4YTIxYjUxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYR1FldGEzM2taYlp3aTdnc0VoUWFnT09OYlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmwxd1BBenBxbEpCNGYzZjM4Q1lhNDI5OTNJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlIyQ0hYS1pZIiwibWUiOnsiaWQiOiIyMzQ5MTMyMTI2OTA3Ojc3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsYXlvbW8gVGVjaCBJbnN0aXR1dGUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0plUzV3c1FtcDNydVFZWUNpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpidFJsZHJ3OHVwK3ZTRE9Xd2ErNFNGU0EzckVCaG00ZnplWDU5RnlBUW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVUYmJDRmszakpGYkRyME9DUDRPOXJ4dlRBcE4zNnVOUHVmbVFyOXNNQlRZMGtKSTF5NnhMSHFLK1hwUktiS2lTRjdzZVFmY20zdFY2SDBWM3R5d0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpbGVtQ0JIVE9LTVovaUpEdVg4akVBZEdTQldlVGNLbVpsK2s0SmVhMkZYTDhKVnlvNngvZEFhaFdxeUhVdzFINkNuMTZTQ3BWSXJGRmNEUU1RY29BQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzIxMjY5MDc6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTI3VVpYYThQTHFmcjBnemxzR3Z1RWhVZ042eEFZWnVIODNsK2ZSY2dFSyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTkwNzI0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGTCsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
