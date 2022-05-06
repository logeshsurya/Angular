import { Organisation } from "./Organisation";

export class Department
{
    id : number = 0;
    departmentName : string = '';
    organisationId : number = 0;
    organisation !: Organisation;
    isActive : boolean = true;
}