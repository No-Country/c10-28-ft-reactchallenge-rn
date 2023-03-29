import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    publicacion_id: number;

    @Column()
    vendedor_id: number;

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
