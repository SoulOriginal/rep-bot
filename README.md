# rep-bot

A Discord bot written in 2019 on discord.js 11. It has moderation commands, music playback, a few games and reaction commands, and replies in Russian. The repository is archived as it was and is not maintained.

## What is in here

- `main.js`, `commands/` and `events/` are the bot itself. Commands cover moderation (`ban`, `kick`, `mute`, `clear`, `lockdown`, role management), music (`play`), games (`kazino`, `minesweeper`, `8boll`), utilities (`userinfo`, `serverinfo`, `avatar`, `translate`, `poll`) and some fun commands.
- `С_reactions/` has reaction commands such as `hug`, `kiss`, `pat` and `slap`. They fetch images from the nekos.life API.
- `que/`, `languages/`, `public/`, `routes/`, `models/` and `middleware/` come from [LenoxBot](https://github.com/gillesheinesch/LenoxBot), an open-source Discord bot that I used as a base.

## Running it

It does not run as is. It targets discord.js 11 and the Discord API of 2019, so it needs porting to a current version. Known gaps:

- `package.json` lists only part of the dependencies.
- The `settings.json` that `models/` reads for the MongoDB connection is not included.
- `main.js` has at least one syntax error (an `await` outside an async function, around line 273).

The bot token lives in `config.json`, which is git-ignored. Copy `config.example.json` to `config.json` and fill in your own token.

## History

The two commits keep their original dates from November 2019. Before publishing, files with credentials and a few explicit or prank commands were removed from them.
