function BBtranslate() {
    let text = document.querySelector('.textTranslate').value;
    let textarr = text.split("");
    let words = "";
    for(let i = 0; i<textarr.length; i++){
        if(textarr[i] == 'A' || textarr[i] == 'a' || textarr[i] == 'O' || textarr[i] == 'o' || textarr[i] == 'I' || textarr[i] == 'i' || textarr[i] == 'U' || textarr[i] == 'u' || textarr[i] == 'E' || textarr[i] == 'e' || textarr[i] == "O'" || textarr[i] == "o'"){
            words += (textarr[i] + 'b' + textarr[i])
        } else {
            words += textarr[i]
        }
    }
    document.querySelector('.result').innerHTML = words;
}