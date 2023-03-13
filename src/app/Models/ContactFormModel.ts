

export class ContactFormModel { /* HACEMOS NUESTRO MODELO Y LO EXPORTAMOS PARA PODER LLAMARLO DESDE OTROS COMPONENTES */

/*DECLARAMOS LAS VARIABLES DE NUESTRO MODELO*/
    public nombre: string;
    public apellidos: string;
    public numeroTelefono: number;
    public email: string;
    public direccion?: string;
    public localidad?: string;
    public provincia?: string;
    public password: string;
    public repeatPassword: string;
    public condiciones: boolean;
    public comentarios?: string;
    public passCorrecta: boolean;
    public repeatPassCorrecta: boolean;
}