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

      return error

    }

  }

  async findAll(): Promise<User[]> {

    return await this.usersRepository.find();

  }

  async findOne(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

}
