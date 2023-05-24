/***ARRAYS***/
var notes = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"];
var modes = ["Ionic","Dorian","Phrygian","Lydian","Mixolydian","Eolian","Locrian"];
var tonalities = [" major", " minor"];
var intervals = [" fundamental"," 2nd"," 3rd"," 4th"," 5th"," 6th"," 7th"];
var strings = [" 6th"," 5th"," 4th"];



function getRandom(arrayList){
    var result = arrayList[Math.floor(Math.random() * arrayList.length)]
    return result;
    
   /*  document
        .getElementById("risultato")
        .textContent = result; */
}



/***SWITCH SELECTORS***/
function generate (){
    switch(document.getElementById("selector").value){
        case "pentatonic":
            var note = getRandom(notes);
            var tonality = getRandom(tonalities);
            document
                .getElementById("display")
                .textContent = (note + tonality + " pentatonic scale");
            
            document
                .getElementById("suggest")
                .textContent = ("")
            break;
        
        case "diatonic":
            var note = getRandom(notes);
            var tonality = getRandom(tonalities);
            var interval = getRandom(intervals);
            var string = getRandom(strings);
            document
                .getElementById("display")
                .textContent = (note + tonality + " from the" + interval + " on the" + string + " string");
            
            document
                .getElementById("suggest")
                .textContent = ("For example. 'C major from the 5th on the 4th string' means that you have to play a C major scale starting from the G note on the D string (5th fret)")
            break;

        case "modal":
            var note = getRandom(notes);
            var mode = getRandom(modes);
            var interval = getRandom(intervals);
            var string = getRandom(strings);
            document
                .getElementById("display")
                .textContent = (note + " " + mode + " from the" + interval + " on the" + string + " string");

            document
                .getElementById("suggest")
                .textContent = ("For example. 'C major from the 5th on the 4th string' means that you have to play a C major scale starting from the G note on the D string (5th fret)")
            break;
            
        default:
            window.alert("Please select an option")
            break;
    }
}