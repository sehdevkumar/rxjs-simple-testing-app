import { MailingPipe } from './mailing.pipe';

describe('MailingPipe', () => {
  it('create an instance', () => {
    const pipe = new MailingPipe();
    expect(pipe).toBeTruthy();
  });
});
