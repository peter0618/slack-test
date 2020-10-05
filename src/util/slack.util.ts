export class SlackUtil {
  static send(webhookUri, u, m, c, e) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Slack = require('slack-node');
    // const webhookUri =
    //   'https://hooks.slack.com/services/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';
    const slack = new Slack();
    slack.setWebhook(webhookUri);
    return new Promise(resolve => {
      slack.webhook(
        {
          username: u,
          text: m,
          channel: c,
          // eslint-disable-next-line @typescript-eslint/camelcase
          icon_emoji: e == null ? ':heavy_check_mark:' : e,
        },
        (err, response) => (err ? resolve(err) : resolve(response)),
      );
    });
  }
}
