import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    valoracion_id: number;

    @ManyToOne(() => User, (user) => user.user_reviews)
    usuario_valorado: User;

    @Column()
    usuario_calificador: number;

    @Column()
    calificacion: number;

    @Column()
    comentario: string;

    @CreateDateColumn({ type: "date" })
    fecha_cracion: string
}
