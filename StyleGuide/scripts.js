const LOG = false; // make "true" to enable logging to the console
let prev = null; // keeps track of the previous button clicked to avoid useless work

/*  If a new radio button is clicked, then it makes two lists of objects:
    first the items to be made visible, and second the items to be hidden.
    Since NodeLists do not have a concat function, I had to go about it
    a different way. */
function changeColorSyntax() {
    let val = document.querySelector("input[name=colorRadios]:checked").value;
    
    if ( prev !== val ) {
        log( val + " was chosen." );
        let changeVals = [];
        let otherVals = [];
        
        switch( val ) {
            case "hex":
                changeVals = document.getElementsByClassName("value hex");
                otherVals.push.apply( otherVals, document.getElementsByClassName("value rgb" ) );
                otherVals.push.apply( otherVals, document.getElementsByClassName("value hsl" ) );
                break;
            case "rgb":
                changeVals = document.getElementsByClassName("value rgb");
                otherVals.push.apply( otherVals, document.getElementsByClassName("value hex" ) );
                otherVals.push.apply( otherVals, document.getElementsByClassName("value hsl" ) );
                break;
            case "hsl":
                changeVals = document.getElementsByClassName("value hsl");
                otherVals.push.apply( otherVals, document.getElementsByClassName("value hex" ) );
                otherVals.push.apply( otherVals, document.getElementsByClassName("value rgb" ) );
                break;
            default: 
                log( "ERROR" );
                break;
        }

        for ( let i=0; i<changeVals.length; i++ )
            changeVals[i].style.display = "block";
        for ( let j=0; j<otherVals.length; j++ )
            otherVals[j].style.display = "none";
        
        prev = val;
    }
}

function log( msg ) {
    if ( LOG ) {
        console.log( msg );
    }
}