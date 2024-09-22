import { Users } from "./Users";

export class Books {
    id: number;
    title: String;
    author: String;
    status: String;
    bookQuantity: number;
    issuedTo: Users[];
}