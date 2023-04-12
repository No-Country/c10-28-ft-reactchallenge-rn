import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

const data = require("../../src/users/users.json")

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {

    try {

      const email = await this.usersRepository.findOneBy({ email: createUserDto.email });

      if (email) {
        throw new Error(`${createUserDto.email} ya ha sido registrado.`)
      }

      const user = this.usersRepository.create({
        email: createUserDto.email,
        password: createUserDto.password,
        nombre_completo: createUserDto.nombre_completo,
        foto_perfil: createUserDto.foto_perfil,
        direccion: createUserDto.direccion,
        telefono: createUserDto.telefono,
      });

      return await this.usersRepository.save(user);


    } catch (error) {

      return { message: error.message }

    }

  }

  async findAll(): Promise<User[]> {

    return await this.usersRepository.find();

  }

  async findOne(email: string) {
    return await this.usersRepository.findOne({
      where: { email },
      relations: {
        user_posts: true,
        user_reviews: true
      }
    });
  }

  async findUser(id: number) {
    const user = await this.usersRepository.findOne({
      relations: {
        user_posts: true,
        user_reviews: true
      }, where: {
        user_id: id
      }
    });

    const { password, ...data } = user;

    return data
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

}
