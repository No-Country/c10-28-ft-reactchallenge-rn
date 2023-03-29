import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Post],
    synchronize: true
  }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
