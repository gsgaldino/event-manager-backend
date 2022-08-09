import { createUserUseCase } from '.';
import { CreateUserDTO } from './CreateUserDTO';

test('Should create a new user', async () => {
  const user: CreateUserDTO = {
    email: `foo_${Date.now()}@bar.com`,
    password: '123',
  };

  const created = await createUserUseCase.execute(user);

  expect(created).toHaveProperty('id');
  expect(user.email).toBe(created.email);
});
