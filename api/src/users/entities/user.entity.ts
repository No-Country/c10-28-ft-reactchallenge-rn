import { Post } from "src/posts/entities/post.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    nombre_completo: string;

    @Column({ default: "" })
    foto_perfil: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @OneToMany(() => Post, (post) => post.vendedor_id)
    user_posts: Post[]

    @OneToMany(() => Review, (review) => review.usuario_valorado)
    user_reviews: Review[]

}
