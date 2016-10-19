/**
 * Created by bad4iz on 19.10.16.
 */
export class Todo{
    title: string;
    done: boolean;
    my_mouseenter: boolean;

    constructor(title: string){
        this.title = title;
        this.done = false;
        this.my_mouseenter= false;
    }
}