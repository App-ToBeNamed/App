export default class SongModel{
    constructor(albumArt, name, artist, voteCount, queueCode){
        this.albumArt = albumArt;
        this.voteCount = voteCount;
        this.artist = artist;
        this.name = name;
        this.queueCode = queueCode
    }
    getName(){
        return this.name;
    }
    getArtist(){
        return this.Artist;
    }
    getvoteCount(){
        return this.voteCount;
    }
    updateVotes(){
        this.voteCount++;
        return this;
    }
}