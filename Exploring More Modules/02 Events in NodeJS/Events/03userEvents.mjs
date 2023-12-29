import * as Events from 'events';

export class userEvents extends Events.EventEmitter {
    // Events
    createPost(content) {
        console.log("Create a post here");
        this.event('postCreated', content);
    }
}