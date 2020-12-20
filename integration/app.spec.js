describe('App', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8080/');
  });

  it('should display the title', async () => {
    await expect(page).toMatchElement("title", {
      text: "Music Vintage"
    });
  });
});
