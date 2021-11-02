const CronJob = require('cron').CronJob;
const exec = require('child_process').exec;

new CronJob(process.env.CRON_TIME || '* * * * *', () => {
  console.log("Commit");
  exec('sh commit.sh');
}, null, true, 'America/Los_Angeles').start();