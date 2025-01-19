const referrer = "";
const fetchURL = "";


const minutes = 4.9;

const { Client, 
    GatewayIntentBits,
    EmbedBuilder,
    PermissionsBitField,
    Permissions,
    Embed,
  } = require(`discord.js`);
  
  require("dotenv").config();
  const TOKEN = process.env.DISCORD_TOKEN;
  const AUTHTOKEN = process.env.AUTH_TOKEN;
    
  const client = new Client({
      intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
      ],
  });

  function say(message,token){
    fetch(fetchURL, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.5",
        "authorization": token,
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-discord-timezone": "America/Guatemala",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiaGFzX2NsaWVudF9tb2RzIjpmYWxzZSwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMi4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTMyLjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjM2MDMyMCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
      },
      "referrer": referrer,
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `{"mobile_network_type":"unknown","content":"${message}","nonce":"${Date.now()}","tts":false,"flags":0}`,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

  client.on("ready",(status)=>{
    console.log("bot is online");
    console.log("AFK started");
setInterval(()=>{
    say("$cost")
},60000*minutes);
  })

  client.on("messageCreate",(message)=>{

    if(message.author.id === "1086321246905565214"){

      console.log(message);

      if(message.embeds[0]){
        let embed = message.embeds[0].data;
        console.log("\n\nWe got ourselves an embed\n\n");
        console.log(embed);

        if(embed.title === "Cost of Solana"){
          console.log("solana cost");

          let cost = parseInt(embed.description.slice(60));
          if(cost < 164){
            say("$buy all", AUTHTOKEN);
          }else if(cost > 75){
            say("$sell all", AUTHTOKEN);
          }
        } 
      }
    }else{
      return;
    }

    if(message.author.bot || !message.content.startsWith(prefix))return;

    
  })


  client.login(TOKEN);
