import { Message } from './message';
export class User {

    message: Array<Message> = new Array<Message>();

    constructor(
        public name: string
    ) {
    }
}
