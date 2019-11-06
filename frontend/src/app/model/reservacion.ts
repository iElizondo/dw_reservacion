export interface Reservacion {
    id: Number;
    id_user: Number;
    empresa?: String;
    usuario?:String;
    aula: String;
    fecha: String;
    hora_inicio: String;
    hora_fin: String;
    detallle: String;
    esatdo_reservacion: String;
    estado: String;
}
