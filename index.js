function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log('HELLO');
    return string.toUpperCase();
}
function logWhisper(string) {
    console.log('hello');
    return string.toLowerCase();

//function sayHiToGrandma(string) {
    console.log('hello'.toLowerCase());
    return ("I can\'t hear you!");
    console.log('hello'.toUpperCase());
    return ("YES INDEED!");
}
function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string === "Let's have dinner together!": return "I would love to!"; 
        case string === shout(string): return "YES INDEED!"; 
        case string === whisper(string): return "I can't hear you!";
    }
}