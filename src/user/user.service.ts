import { Injectable } from '@nestjs/common';
import redis from 'src/lib/redis';
import { generateToken, hashPassword } from 'src/utils';
import { GetUsersOutputDTO, SaveUserInputDTO, SaveUserOutputDTO } from './dto';

@Injectable()
export class UserService {
  async registerUser(input: SaveUserInputDTO): Promise<SaveUserOutputDTO> {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      return {
        status: 400,
        message: 'Nome, e-mail e senha são obrigatórios',
      };
    }

    const hashed = hashPassword(password);
    const userKey = `user:${email}`;

    const existingUser = await redis.get(userKey);
    if (existingUser) {
      return {
        status: 409,
        message: 'Nome, e-mail e senha são obrigatórios',
      };
    }

    await redis.set(userKey, JSON.stringify({ name, email, password: hashed }));
    return {
      status: 200,
      message: 'Usuário registrado com sucesso',
    };
  }

  async listUsers(): Promise<GetUsersOutputDTO[]> {
    const keys = await redis.keys('user:*');
    const users = [];

    for (const key of keys) {
      const userData = await redis.get(key);
      if (userData) {
        const { name, email, password } = JSON.parse(userData);
        const token = generateToken({ name, email });
        users.push({ name, email, password, token });
      }
    }

    return users;
  }
}
