// set up text to print, each item in array is new line
var aText = new Array(
    "I am a London-based aspiring Python developer with experience",
    "in tools such as MongoDB, PostgreSQL and Discord Bot developing"
    );
    var iSpeed = 50; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 1000;     
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("text");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = "&zwnj;" + sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;     
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 50);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
