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

  async findAll(queries): Promise<Post[]> {

    try {

      if (Object.keys(queries).length > 0) {

        return await this.postsRepository.find({
          where: {
            tipo: queries.tipo
          }
        });

      } else {

        return await this.postsRepository.find();

      }

    } catch (error) {

      console.log(error);
      return [];


    }





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
