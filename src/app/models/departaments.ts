import { Enterprises } from "./enterprises";
export class Departaments {

    id: number=0;
    create_by: string  = "";
    createDate: string  = "";
    modified_by: string  = "";
    modified_date: string  = "";
    status: string  = "";
    descripcion: string  = "";
    name: string  = "";
    phone: string  = "";
    enterprises: Enterprises | undefined;
}
