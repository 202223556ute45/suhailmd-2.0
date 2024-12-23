const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_52_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdaeHhldGhqY0FNdFFMeE8vNHM1amZjV045RFZjaXV0NThCcHZKNFY1TGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVGX3U2YmM0VG5TamlsZXppdDNUb2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2YwY2Q1MzItNTRhOC00ODFkLWJkZWItZmY2ZDU2NzY4MDNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIwNixcbiAgICAgIDExNSxcbiAgICAgIDEzMixcbiAgICAgIDg4LFxuICAgICAgMTUzLFxuICAgICAgMTgyLFxuICAgICAgMzUsXG4gICAgICAyMCxcbiAgICAgIDE5NSxcbiAgICAgIDIyNixcbiAgICAgIDE1NCxcbiAgICAgIDE2NCxcbiAgICAgIDEyNixcbiAgICAgIDg4LFxuICAgICAgMTU1LFxuICAgICAgMTA1LFxuICAgICAgMTI0LFxuICAgICAgMTAzLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDQwLFxuICAgICAgMTAxLFxuICAgICAgMjMyLFxuICAgICAgMTU1LFxuICAgICAgMTgyLFxuICAgICAgMTcwLFxuICAgICAgMTE4LFxuICAgICAgMjksXG4gICAgICA0MCxcbiAgICAgIDUwLFxuICAgICAgMTczLFxuICAgICAgMyxcbiAgICAgIDExNyxcbiAgICAgIDQ2LFxuICAgICAgMjYsXG4gICAgICA4NixcbiAgICAgIDQ3LFxuICAgICAgMTYsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXVlhZNllMTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njc1NTk3MzIxOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2RtfCdka7wnZG38J2RufCdkbZcIixcbiAgICBcImxpZFwiOiBcIjQ0MTk1NjMyOTU1NDMyOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091QXBSTVF5SzJrdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmdhbGpWaDFLNU5TT3ZSRERqZk9NdFFQMWVpOGQ0SUlGSDBPTnY1QTN6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNVDBqRktZL3dMd2lSekdjWm56WmpITGJHdEFZbkJuWjBFMGFOMW94dW1LYzlZVFpuZThnNFBwT1lNQTY5dEIwckdkZUliQ2RrZmNZU1ZKSTVKaWZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTGRhNlhydkRDNjUyMEo4ck5KREtvYmtmUlpKSUYzMDA1eGp3UnVmdlNsUXB3Tld2bEZtdzJTR1Z5S292bzcyNy9wQ2pTYnErdlhlL1lLYjY0VmNqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzU1OTczMjE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk0MDM2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
