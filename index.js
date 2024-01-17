const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input,{minLength: 3});
if(langCode == "und"){
    console.log(colors.red("Undentified lang"))
}else{
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}

