describe('The Question List', () => {
  beforeEach(() => {
    console.log("Before each!");
  });

  beforeAll(() => {
    console.log("Before all!");
  });

  afterEach(() => {
    console.log("After each!");
  });

  afterAll(() => {
    console.log("After all!");
  });

  it.only('Should display a list of items', () => {
    expect(40 + 2).toEqual(42);
  });

  it.skip('Should be the meaning of life', () => {
    expect(40 + 2).toEqual(43);
  });
});