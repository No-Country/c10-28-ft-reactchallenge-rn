import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    publicacion_id: number;

    @ManyToOne(() => User, (user) => user.user_posts)
    vendedor_id: User;

    @CreateDateColumn({ type: "date" })
    fecha_creacion: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    condiciones_intercambio: string;

    @Column()
    trueque: boolean;

    @Column()
    venta: boolean;

    @Column()
    precio: string;

    @Column("simple-array")
    fotos: string[];

    @Column()
    disponible: boolean;

    @Column()
    tipo: string;

    @Column()
    categoria: string;
}
