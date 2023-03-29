import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
// const response = require("../../publicaciones.json")

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }

  // create(createPostDto: CreatePostDto) {
  //   return 'This action adds a new post';
  // }

  async findAll(): Promise<Post[]> {
    // const posts = await this.postsRepository.find();
    // if (!posts.length) {
    //   response.forEach(async element => {
    //     const post = this.postsRepository.create({
    //       vendedor_id: element.vendedor_id,
    //       titulo: element.titulo,
    //       descripcion: element.descripcion,
    //       condiciones_intercambio: element.condiciones_intercambio,
    //       trueque: element.trueque,
    //       venta: element.venta,
    //       precio: element.precio,
    //       fotos: element.fotos,
    //       disponible: element.disponible,
    //       tipo: element.tipo,
    //       categoria: element.categoria
    //     });

    //     await this.postsRepository.save(post);

    //   });
    // }

    return await this.postsRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
