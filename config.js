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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_30_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlNWnZhekQyQmYvY3JLK0xTVCtJRjd4N3ZvSFJkZ0YvcWEyTjlpbDJiWDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNTU1MjUzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUJERDA0N0ExMkQ3Qjc0MzBGQzNFOTM3RjNFQjQzOEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzU1ODQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjloV2ZMQWlqUkVxOWprUWFiWHQwV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGNkNjJlZDMtNjNjYi00NGE0LThkYzEtZTZiODRiNzk5NTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDIyLFxuICAgICAgNTIsXG4gICAgICAxNzEsXG4gICAgICAyNDYsXG4gICAgICAxNzksXG4gICAgICAyMDksXG4gICAgICAxMjAsXG4gICAgICAyMzAsXG4gICAgICAzOCxcbiAgICAgIDE0NyxcbiAgICAgIDE4LFxuICAgICAgNTcsXG4gICAgICAxMjgsXG4gICAgICA4OSxcbiAgICAgIDEyOSxcbiAgICAgIDMxLFxuICAgICAgMTg2LFxuICAgICAgNzcsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTM4LFxuICAgICAgMTEwLFxuICAgICAgMTMsXG4gICAgICA5LFxuICAgICAgMTIsXG4gICAgICA1NCxcbiAgICAgIDE5NSxcbiAgICAgIDU4LFxuICAgICAgMTIxLFxuICAgICAgMjA3LFxuICAgICAgMjA2LFxuICAgICAgODMsXG4gICAgICAyNDgsXG4gICAgICAyMDMsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICAxNTgsXG4gICAgICA3OCxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGM1E5ODk2MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNTU1MjUzMDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODUwOTIxMTAxOTY4MjY6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU1RBUiBGRuuqqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051MzBjb0VFTGZSLzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFRiZjdVdVN5a1FLYStmUDRoNURXci9jMElFclNPS3RYTWdWdTdmTGUwcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZbXJNSHVKK29QVkhiR29xM1RFZTVsSDB2WlF6VTN1RHJCWk04YTJaWkRpQVhEUXZ2alFiWEJ6UGFydnBZblBHM0lKTlVPYUxHeEdQVXBSd01PVElBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHTmMwWUpLTnNlZDhlVGM0N1dkTjIvV3dFdkkyMzk2TWNyQVhHUXZybGExZEM0N09hNXNzOXBRMkZoZURXaE9VRU1wZlFISFNSUXh5TUMvemVZTGVnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE1NTUyNTMwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzU1ODM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFF0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBb1Rxa1BJK2dWbG45Sm1RVW8veVgxMTZRRm1iNUlhejRZRm9lZ29aTlpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAyNjUzMDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc1NTgzNzc5N1wifSIKfQ=="  // PUT your SESSION_ID 


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
