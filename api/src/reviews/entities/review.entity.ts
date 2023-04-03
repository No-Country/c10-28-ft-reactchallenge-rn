import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    valoracion_id: number;

    @Column()
    usuario_valorado: number;

    @Column()
    usuario_calificador: number;

    @Column()
    calificacion: number;

    @Column()
    comentario: string;

    @CreateDateColumn({ type: "date" })
    fecha_cracion: string
}
