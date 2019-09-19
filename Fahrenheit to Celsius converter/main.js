document.getElementById("convert").addEventListener("click", convertTemp);

function convertTemp() {
    //Get the Fahrenheit
    let fahrenheitTemp = Number(document.getElementById("fahrenheit").value);

    //Turn fahrenheit to celsius
    let celsiusTemp = (fahrenheitTemp - 32)*5/9;   // 12.55555555...
    celsiusTemp = celsiusTemp * 100;   // 1255.5555555.....
    celsiusTemp = Math.round(celsiusTemp);  //  1255
    celsiusTemp = celsiusTemp / 100;


    //Print out celsius temp
    document.getElementById("celsius").innerHTML = celsiusTemp;
}