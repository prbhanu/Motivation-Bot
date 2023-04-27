# Motivation-bot
## Motivation-bot is a Discord bot that sends random motivational quotes in response to a trigger message. The bot can also detect "sad" words in a message and replies with encouraging texts. The bot can be made 24/7 by using ReplIt.

# Prerequisites
Node.js v12.x or later
Discord.js library
npm package manager
Installation
Clone the repository and move into the project directory:

```
git clone https://github.com/Cyrusroy001/motivation-bot.git
cd motivation-bot
```
 # Install the dependencies using npm:

```npm install```
 ## Set up your bot by creating a config.json file in the root directory of the project with the following content:

```
{
  "token": "YOUR_BOT_TOKEN",
  "guildId": "YOUR_GUILD_ID",
  "clientId": "YOUR_CLIENT_ID"
}
```
**Replace token with the token of your Discord bot, YOUR_GUILD_ID with the ID of your Discord server, and YOUR_CLIENT_ID with the ID of your Discord bot client.**

# Usage
### To start the bot, run the following command:

```
node index.js
```
The bot will then be online and listening for messages on your Discord server.

Contributing
Contributions to Motivation-bot are welcome! If you find a bug or want to suggest a new feature, please open an issue or submit a pull request.

# License
Motivation-bot is licensed under the MIT License.
