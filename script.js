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

const list = document.querySelector('.list');
const skills = new Map([
    [' Python', 'fa-python'],
    [' Bash', 'fa-codepen'],
    [' HTML', 'fa-html5'],
    [' CSS', 'fa-css3'],
    [' Javascript', 'fa-js'],
    [' NodeJS', 'fa-node-js'],
    [' Java', 'fa-java'],
    [' MongoDB', 'fa-codepen'],
    [' PostgreSQL', 'fa-codepen'],
    [' Cloud', 'fa-codepen'],
    [' Linux', 'fa-linux'],
    [' Windows', 'fa-windows'],
    [' Replit', 'fa-codepen'],
    [' Visual Studio Code', 'fa-codepen'],
    [' GitHub', 'fa-github'],
    [' Discord', 'fa-discord']
]);

for (let [k, v] of skills.entries()) {
    const li = document.createElement('li');
    const i = document.createElement('i');
    const t = document.createTextNode(k);
    ['fab', v].forEach(c => i.classList.add(c));
    li.append(i);
    li.append(t);
    list.append(li);
}

function changeText(x) {
    if (x.matches) {
        document.getElementById("footText").innerHTML = "Caeden";
    } else {
        document.getElementById("footText").innerHTML = "© 2021- Caeden Perelli-Harris";
    }
  }
  
var x = window.matchMedia("(max-width: 640px)")
changeText(x)
window.onresize = changeText

