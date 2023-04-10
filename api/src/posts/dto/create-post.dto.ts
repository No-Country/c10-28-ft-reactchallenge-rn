import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    @IsNumber()
    vendedor_id: number;

    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    condiciones_intercambio: string;

    trueque: boolean;

    venta: boolean;

    precio?: string;

    @IsNotEmpty()
    @IsArray()
    fotos: string[];

    disponible: boolean;

    @IsNotEmpty()
    tipo: string;

    @IsNotEmpty()
    categoria: string;


}
