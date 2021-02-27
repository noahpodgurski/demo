import {Deserializable} from "./deserializable.model";


export class Book implements Deserializable { 
    id: number;
    title: string;
    author: string;
    publish_date: Date;

    constructor(id: number, title: string, author: string, publish_date: Date){
        this.id = id;
        this.title = title;
        this.author = author;
        this.publish_date = publish_date;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}