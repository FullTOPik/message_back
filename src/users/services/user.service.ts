import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { userAlreadyExists } from '../constants';
import { User } from '../models/user.model'; 
import { NewUserDTO } from '../dto/NewUser.dto';
import { UserEmailDTO } from '../dto/UserEmail.dto';
import { UserLoginDTO } from '../dto/UserLogin.dto';
import { UserPhoneDTO } from '../dto/UserPhone.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findUserByEmail(email: UserEmailDTO) {
    return this.usersRepository.findOne({ where: email });
  }

  findUserByPhone(phone: UserPhoneDTO) {
    return this.usersRepository.findOne({ where: phone });
  }

  findUserByLogin(login: UserLoginDTO) {
    return this.usersRepository.findOne({ where: login });
  }

  async addNewUser(newUserDTO: NewUserDTO) {
    const { email, phone, login } = newUserDTO;

    const [userByEmail, userByPhone, userByLogin] = await Promise.all([
      this.findUserByEmail({ email }),
      this.findUserByPhone({ phone }),
      this.findUserByLogin({ login }),
    ]);

    if (userByPhone) {
      throw new BadRequestException(userAlreadyExists('phone', phone));
    }
    if (userByEmail) {
      throw new BadRequestException(userAlreadyExists('email', email));
    }
    if (userByLogin) {
      throw new BadRequestException(userAlreadyExists('login', login));
    }

    const hashPassword = await hash(newUserDTO.password, 4);

    return this.usersRepository.save({
      ...newUserDTO,
      password: hashPassword,
    });
  }
}
