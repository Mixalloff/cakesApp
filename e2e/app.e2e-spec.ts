import { CakesAppPage } from './app.po';

describe('cakes-app App', function() {
  let page: CakesAppPage;

  beforeEach(() => {
    page = new CakesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
