const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "&\"'(-è_çà)$ù*!:;,?";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

const generatePassword = () => {
    let data = [];
    let password = "";

    if(lowercase.checked) data.push(...dataLowercase)
    if(uppercase.checked) data.push(...dataUppercase)
    if(number.checked) data.push(...dataNumber)
    if(symbols.checked) data.push(...dataSymbols)

    if(data.length === 0) {
        alert("Veuillez selectionner des critere");
        return;
    }

    for(i = 0; i < rangeValue.value ; i++)
    {  
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "copié !"
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    },1000)
}

generateButton.addEventListener("click", generatePassword);

