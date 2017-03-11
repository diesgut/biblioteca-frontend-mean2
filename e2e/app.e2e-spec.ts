import { BibliotecaFrontendMean2Page } from './app.po';

describe('biblioteca-frontend-mean2 App', () => {
  let page: BibliotecaFrontendMean2Page;

  beforeEach(() => {
    page = new BibliotecaFrontendMean2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
