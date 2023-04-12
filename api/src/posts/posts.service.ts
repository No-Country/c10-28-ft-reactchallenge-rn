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

      const select = {
        publicacion_id: true,
        titulo: true,
        fotos: true
      }

      if (Object.keys(queries).length > 0) {

        const searchQueries = {
          tipo: queries.tipo,
          categoria: queries.categoria,
          vendedor_id: {
            user_id: queries.vendedor
          },
          venta: queries.venta === "true" ? true : null,
          trueque: queries.trueque === "true" ? true : null
        }

        if (queries.hasOwnProperty("search")) {

          const currentSearch = { ...searchQueries, titulo: ILike(`%${queries.search}%`) };

          const posts = await this.postsRepository.find({
            select,
            where: currentSearch
          });

          posts.forEach((post) => { post.fotos = [post.fotos[0]] });

          return posts

        } else {

          const posts = await this.postsRepository.find({
            select,
            where: searchQueries
          });

          posts.forEach((post) => { post.fotos = [post.fotos[0]] });

          return posts

        }

      } else {

        const posts = await this.postsRepository.find({
          select,
        });

        posts.forEach((post) => { post.fotos = [post.fotos[0]] });

        return posts

      }

    } catch (error) {

      console.log(error);
      return [];

    }
  }

  async findOne(id: number) {

    const post = await this.postsRepository.findOne({
      where: {
        publicacion_id: id
      },
      relations: {
        vendedor_id: {
          user_reviews: true
        }
      }
    });

    const { vendedor_id, ...details } = post;

    const { user_reviews, email, password, telefono, ...vendedor } = vendedor_id;

    const calificacionPromedio = user_reviews.length > 1 ? Math.round(user_reviews.reduce((total, review) => total + review.calificacion, 0) / user_reviews.length) : 0;

    const miniPerfil_vendedor = { ...vendedor, calificacionPromedio };

    const response = { ...details, vendedor_id: { ...miniPerfil_vendedor } };

    return response;

  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
