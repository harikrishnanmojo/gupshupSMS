import { MessageService } from '../src';

describe('blah', () => {
  const messageService = new MessageService();
  it('message service is defined', async () => {
    expect(messageService).toBeDefined();
  });
});
