# Commit Bot

Commit Bot is a bot to make your GitHub prettier and you can control how your Activity is going to look like.

## Usage

If you want to make a job to run every day you will need to run this with node or [pm2](https://pm2.keymetrics.io) in a server.

```bash
node index.js
CRON_TIME="0 0-23/2 * * *" node index.js
```

CRON_TIME is how often commits will be generated. You can learn more about cron expressions [here](https://crontab.guru/#*_*_*_*_*).

You can also run it by hand to if you prefer

```bash
sh commit.sh
```

To use it I recommend:\
[Heroku](https://www.heroku.com/platform)\
[Replit](https://replit.com)
