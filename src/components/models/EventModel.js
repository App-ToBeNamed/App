export default class EventModel{
    constructor(eventImg, eventName, organizer, location, time, queueCode){
        this.time = time;
        this.eventImg = eventImg;
        this.location = location;
        this.eventName = eventName;
        this.organizer = organizer;
        this.queueCode = queueCode;

    }
    getEventName(){
        return this.eventName;
    }
    getLocation(){
        return this.location;
    }
    getOrganizer(){
        return this.organizer;
    }
    getTime(){
        return this.time;
    }
}
