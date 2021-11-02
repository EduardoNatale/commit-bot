const CronJob = require('cron').CronJob;
const exec = require('child_process').exec;

new CronJob(process.env.CRON_TIME || '0 0-23/2 * * *', () => {
  console.log("Commit: " + new Date());
  exec('sh commit.sh');
}, null, true, 'America/Los_Angeles').start();