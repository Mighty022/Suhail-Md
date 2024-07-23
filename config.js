const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_20_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWhEYnZpdTBLRkhwaFhicE9iK1A1Wlc5ekdieWcvdW85ZUZKMWRsNVUrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3MjI3NDYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTE5RUI4OTQ5MkE0QjBDNEQyQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MTIwMTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFpzWU9nMHhTVWVBcDFqYWxBZXJYd1wiLFxuICBcInBob25lSWRcIjogXCJkYTkwMzhmNi1lNTc1LTQ2ZjUtOTJlNy0xZTI5YWVjYmEwZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICA0OCxcbiAgICAgIDMsXG4gICAgICAyMDUsXG4gICAgICAxMjAsXG4gICAgICAyMTYsXG4gICAgICAxNCxcbiAgICAgIDIzOSxcbiAgICAgIDIyMCxcbiAgICAgIDE1NSxcbiAgICAgIDE4NixcbiAgICAgIDY2LFxuICAgICAgNDEsXG4gICAgICAzMCxcbiAgICAgIDEzMCxcbiAgICAgIDEwMCxcbiAgICAgIDEyMSxcbiAgICAgIDI0MyxcbiAgICAgIDIwMCxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICA4MSxcbiAgICAgIDQ3LFxuICAgICAgMTE3LFxuICAgICAgMjI4LFxuICAgICAgMzUsXG4gICAgICAxNTgsXG4gICAgICAxNixcbiAgICAgIDg1LFxuICAgICAgNzYsXG4gICAgICA5OCxcbiAgICAgIDEwOCxcbiAgICAgIDE3MixcbiAgICAgIDIsXG4gICAgICAxOTQsXG4gICAgICA2OSxcbiAgICAgIDM1LFxuICAgICAgODgsXG4gICAgICAxOSxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5dnRMUUlFSVA3L0xRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid3AxcTVVamhpWitlRE5jWlVseG5UbjdFeUk1em1KQU5oSHE3ZFVpand4dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1MEJNc0l5a3c2Nldjb2wzV2NrMHIyN3pLdEJBZCtDdXVuQ1c2RCtKd2pyQXlGQ2FZZzVWYzBjR2NyTkIxTmcxQ3BHVzMzS2szbUdwdSs2TkNRYVBpUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5NWh4ZWhJY3ZmNk1uc0VPeTlxNmFJdHNjNE5uMlNZc014TEFMOWVyRmh3Q2xxRDR6cDJHYVhRNEVPMWNwU3V3UGxVMTQ0bEtvNjBuWkdDR05nNCtDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzcyMjc0NjI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDY5ODQ1NTIwMzg0OjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1pZ2h0efCfmJJcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzcyMjc0NjI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcxMjAwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtpZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2lkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZW0yRFJEZk9xUFFBcUo3WVFhcXFjd1h1azB1Uk92aXdkbkkwMnlTbnRaRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjU3MzkzNTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2Nzc1MzkxMTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
