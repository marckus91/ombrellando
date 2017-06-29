import { OmbrellandoPage } from './app.po';

describe('ombrellando App', () => {
  let page: OmbrellandoPage;

  beforeEach(() => {
    page = new OmbrellandoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
