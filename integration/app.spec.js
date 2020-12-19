describe('App', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8080/auth/sign-in');
  });

  it('should display the power', async () => {
    await expect(page).toMatchElement("#powered", {
      text: "powered by Music Vintage"
    });
  });
});
