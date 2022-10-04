let texte=document.getElementById("text");
let btnlire =document.getElementById("lire");
let texte2=document.getElementById("text2");
let enregitre=document.getElementById("enregitré")
let stop=document.getElementById("stop")
     btnlire.onclick=function (){
               let lecture=texte.value;
               let parole= new SpeechSynthesisUtterance();
                    parole.text=lecture;
                    parole.lang="fr-FR"
                    let vocal= speechSynthesis.speak(parole);
};
let vocal=new (window.webkitSpeechRecognition)();
vocal.lang="fr-FR";
vocal.continuous=true;
vocal.onresult=function(event){
    texte.value=event.results[0][0].transcript;
}
enregitre.onclick=function(){
    vocal.start()
}
stop.onclick=function(){
    vocal.stop()
}