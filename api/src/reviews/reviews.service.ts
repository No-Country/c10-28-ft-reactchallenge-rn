import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

// const response = require("../../src/reviews/reviews.json")

@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>
  ) { }

  // create(createReviewDto: CreateReviewDto) {

  // const reviews = await this.reviewsRepository.find();

  // if (reviews.length === 0) {

  //   response.forEach(async (element) => {

  //     const review = this.reviewsRepository.create({
  //       usuario_valorado: element.usuario_valorado,
  //       usuario_calificador: element.usuario_calificador,
  //       calificacion: element.calificacion,
  //       comentario: element.comentario
  //     });

  //     await this.reviewsRepository.save(review)

  //   })
  // }

  //   return 'This action adds a new review';
  // }

  async findAll() {

    return await this.reviewsRepository.find();

  }

  // findOne(id: number) {
  //   return `This action returns a #${id} review`;
  // }

  // update(id: number, updateReviewDto: UpdateReviewDto) {
  //   return `This action updates a #${id} review`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} review`;
  // }

}
