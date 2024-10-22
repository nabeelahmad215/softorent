import { SoftorentTemplatePage } from './app.po';

describe('Softorent App', function() {
  let page: SoftorentTemplatePage;

  beforeEach(() => {
    page = new SoftorentTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
