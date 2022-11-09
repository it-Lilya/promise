import GameSavingLoader from '../index';

test('load', async () => {
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
