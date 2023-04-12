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
      where: {
        email
      },
      select: {
        user_id: true,
        email: true,
        nombre_completo: true,
        foto_perfil: true,
        password: true
      }
    });
  }

  async findUser(id: number) {
    const user = await this.usersRepository.findOne({
      relations: {
        user_posts: true,
        user_reviews: true
      },
      where: {
        user_id: id
      },
      select: {
        user_id: true,
        email: true,
        nombre_completo: true,
        foto_perfil: true,
        direccion: true,
        telefono: true,
        user_posts: {
          publicacion_id: true,
          titulo: true,
          fotos: true
        },
        user_reviews: true
      }
    });

    user.user_posts.forEach((post) => { post.fotos = [post.fotos[0]] });

    const calificacionPromedio = user.user_reviews.length > 1 ? Math.round(user.user_reviews.reduce((total, review) => total + review.calificacion, 0) / user.user_reviews.length) : 0;

    const response = { ...user, calificacionPromedio };

    // const { password, ...data } = user;

    return response;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

}
