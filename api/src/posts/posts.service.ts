import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { User } from 'src/users/entities/user.entity';
// const response = require("../../publicaciones.json")

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(createPostDto: CreatePostDto) {

    const { vendedor_id, ...postData } = createPostDto;

    const post = this.postsRepository.create(postData);

    await this.postsRepository.save(post)

    const user = await this.usersRepository.findOne({
      relations: {
        user_posts: true
      }, where: {
        user_id: vendedor_id
      }
    });

    user.user_posts.push(post);

    await this.usersRepository.save(user);

    return post
  }

  async findAll(queries): Promise<Post[]> {

    try {

      if (Object.keys(queries).length > 0) {

        const searchQueries = {
          tipo: queries.tipo,
          categoria: queries.categoria,
          vendedor_id: queries.vendedor,
          venta: queries.venta === "true" ? true : null,
          trueque: queries.trueque === "true" ? true : null
        }

        if (queries.hasOwnProperty("search")) {

          const currentSearch = { ...searchQueries, titulo: ILike(`%${queries.search}%`) };

          return await this.postsRepository.find({
            relations: {
              vendedor_id: true
            },
            where: currentSearch
          });

        } else {

          return await this.postsRepository.find({
            relations: {
              vendedor_id: true
            },
            where: searchQueries
          });

        }

      } else {

        return await this.postsRepository.find({ relations: { vendedor_id: true } });

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
