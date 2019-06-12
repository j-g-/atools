import { CallbackInfo } from './callback-info';
import { InteractionNote } from '../interaction-notes/interaction-note';

describe('CallbackInfo', () => {
  it('should create an instance', () => {
    var refNote = "";
    expect(new CallbackInfo(refNote)).toBeTruthy();
  });
});
