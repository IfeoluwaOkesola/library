/* eslint-disable prettier/prettier */
import { Category } from "../schema/book.schema";

export class CreateBookDto {
    readonly title:string;
    readonly description:string;
    readonly author:string;
    readonly price:number;
    readonly category:Category;

}