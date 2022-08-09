import { loginUseCase } from '.';
import { LoginDTO } from './LoginDTO';

test('Should create a new user', async () => {
  const user: LoginDTO = {
    email: `foo@bar.com`,
    password: '123',
  };

  const logged = await loginUseCase.execute(user);

  expect(logged).toHaveProperty('id');
  expect(user.email).toBe(logged.email);
});
