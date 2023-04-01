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

  // create(createUserDto: CreateUserDto) {

  // const user = this.usersRepository.create({
  //   email: element.email,
  //   password: element.contraseña,
  //   nombre_completo: element.nombre_completo,
  //   foto_perfil: element.foto_perfil,
  //   direccion: element.dirección,
  //   telefono: element.teléfono,
  // });

  //   return 'This action adds a new user';
  // }

  async findAll(): Promise<User[]> {

    return await this.usersRepository.find();

  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

}
