/* HACEMOS NUESTRO MODELO Y LO EXPORTAMOS PARA PODER LLAMARLO DESDE OTROS COMPONENTES */

export class ContactFormModel { 
/*DECLARAMOS LAS VARIABLES DE NUESTRO MODELO*/
    public nombre: string;
    public apellidos: string;
    public edad: number;
    public sexo: string;
    public numeroTelefono: number;
    public email: string;
    public direccion: string;
    public localidad?: string;
    public provincia?: string;
    public condiciones: boolean;
    public comentarios?: string;
}