import { Injectable } from '@nestjs/common';
import { SlackUtil } from './util/slack.util';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  private readonly WEB_HOOK_URI: string;

  constructor(private readonly configService: ConfigService) {
    this.WEB_HOOK_URI = this.configService.get<string>('WEB_HOOK_URI');
  }

  getHello(): string {
    return `What's up man!`;
  }

  sendSlackTest() {
    const userName = `Grace Bot`;

    let message = '```';
    message += 'Customer Name  : Peter\n';
    message += 'Inquiry Detail : Refund\n';
    message += '```';

    const channel = '#cs-test';
    const emoji = ':slack_call:';

    SlackUtil.send(this.WEB_HOOK_URI, userName, message, channel, emoji);
    return 'test';
  }
}
