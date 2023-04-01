import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    foto_perfil: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;
}
