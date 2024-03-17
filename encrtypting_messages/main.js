
/********************VARIABLES**********************/
let masterTable = [];
let language = "en";
let invalidCaracters = [];
let keyArray = [];

function selectLanguage( stringResponse ){
    switch ( stringResponse ){
        case "es":
            language = "es";
            break;
        case "fr":
            language = "fr";
            break;
        case "pt":
            language = "pt";
            break;
        default:
            language = "en";
            break;
    }
}

function selectMessageLanguage ( array ){
    if ( array.length != 4 ){
        optionMessage = [
            {state: false, message: `The messages option array must be equall to 4. First item message in English, 2nd Spanish, 3rd French and 4th Portuguese.`},
            {state: false, message: `El array de opciones de mensajes debe ser igual a 4. El primer mensaje en inglés, el segundo en español, el tercero en francés y el cuarto en portugués.`},
            {state: false, message: `Le tableau d'options de messages doit être égal à 4. Le premier message en anglais, le deuxième en espagnol, le troisième en français et le quatrième en portugais.`},
            {state: false, message: `O array de opções de mensagens deve ser igual a 4. O primeiro item da mensagem em inglês, o segundo em espanhol, o terceiro em francês e o quarto em português.`}
        ]
    }
    switch (language){
        case "es":
            return array[1];
        case "fr":
            return array[2];
        case "pt":
            return array[3];
        default:
            return array[0];
    }
}

function asingMasterTable( response ){
    response = Number( response );
    if ( isNaN(response) || response === " " || response < 1 || response > 8 || response === undefined || response === null){
        optionMessage = [
            {state: false, message: `The selected master table is invalid. It must be a number between 1 and 8.`},
            {state: false, message: `La tabla maestra seleccionada es inválida. Debe ser un número entre 1 y 8.`},
            {state: false, message: `La table principale sélectionnée n'est pas valide. Choisissez un numéro entre 1 et 8.`},
            {state: false, message: `A tabela mestra selecionada não é válida. Escolha um número entre 1 e 8.`}
        ]
        return false;
    }
    switch ( response ){
        case 1:
            masterTable = [ "†", "Ý", "{", "É", "N", "ï", "Â", "Ø", "]", "¾", "?", "$", "O", "ó", "î", "È", "U", "Ü", "Æ", "5", "N", "‚", "k", "¥", "}", "X", "[", ",", "Ù", "œ", "á", "ç", "p", "4", "Í", "\"", "E", "Ï", "’", "¸", "*", "”", "Ç", "d", "m", "T", "A", "•", "\\", "@", "˜", "–", "¤", "F", "›", "´", "b", "M", "ª", ">", "l", "ÿ", "Y", "H", "ô", "h", "n", "9", "÷", "Û", "y", "‹", "Ò", "S", "‡", "#", "Ô", "¬", "8", "t", "0", "Å", "Š", "Ë", "P", "¨", "H", "ã", "ù", "w", "x", "š", "¿", "¶", "W", "B", "¦", "à", "=", "™", "ý", "e", "ö", "…", "u", "æ", "^", ")", "°", "é", "S", "!", "ú", "Þ", "r", "<", "ˆ", "ì", "s", "±", "í", ".", "S", "P", "Á", ";", "¡", "‘", "è", "ë", "Œ", "³", "»", "ñ", "1", "/", "Ã", "â", "å", "o", "Ä", "ò", "¯", ":", "g", "¹", "û", "%", "Ÿ", " ", "½", "¢", "õ", "2", "·", "ð", "(", "µ", "v", "®", "Ú", "Ó", "c", "Ì", "²", "©", "Ž", "q", "K", "6", "a", "-", "~", "7", "ä", "Ö", "—", "þ", "Î", "V", "z", "R", "i", "I", "'", "Õ", "|", "×", "Y", "ê", "ß", "Z", "f", "Q", "º", "‰", "£", "“", "J", "B", "ø", "«", "§", "Ð", "À", "„", "3", "ü", "Ñ", "­", "ž", "_", "€", "L", "`", "ƒ", "j", "&", "G", "D", "+", "Ê", "¼", "C" ];
            break;
        case 2:
            masterTable = [ "p", "Û", "ß", "t", "8", "¶", "_", "ç", "ø", "„", "Í", "ó", "J", "z", "N", "Y", "¬", "m", "¡", "™", "V", "ž", "†", "e", "0", "&", "€", "ñ", "P", "Ü", "(", "f", "d", "»", "h", "l", ")", "¢", "ü", ";", "¥", "¾", "j", "@", "î", "º", "à", "Õ", "é", "Á", "]", "Y", "«", "ÿ", "9", "•", "µ", "O", "á", "°", "$", "E", "ï", "Å", "÷", "Ö", "Ú", "±", "ë", "å", "|", "Ý", "`", "¦", "Ñ", "ù", "Ø", "H", "S", ",", "×", "[", "‰", "©", "o", "\"", "c", "X", "=", "Œ", "‹", "H", "y", "¹", "Š", "ä", "æ", "R", "Ë", "5", "{", "C", "ã", "/", "š", "Ó", "ú", "Æ", "-", "Î", "P", "À", "B", "œ", "!", "ê", "Ç", "q", "+", "·", "K", "ö", "­", ">", "L", "F", "u", "7", "ô", "a", "A", "þ", "~", "Ã", "Ž", "*", "½", "D", "Ò", "õ", "4", "…", "È", "2", "‘", "Ä", "i", "w", " ", "“", "S", "è", "Ù", "N", "U", "û", "É", "%", "‚", "?", "³", "Â", "1", "¼", ":", "Ÿ", "Ô", "â", "˜", "Ì", "’", "¸", "6", "í", "–", "®", "g", "'", "ª", "b", "ƒ", "¯", "B", "Ï", "s", "I", "‡", "<", "—", "´", "Z", "G", "Ê", "ý", "ˆ", "ò", "ì", "M", ".", "ð", "\\", "£", "W", "”", "Ð", "²", "¿", "#", "¤", "n", "^", "¨", "T", "r", "›", "v", "}", "Q", "S", "3", "§", "x", "k", "Þ" ];
            break;
        case 3:
            masterTable = [ "ý", "»", "š", "Î", "{", "B", "D", "²", "ˆ", "î", "¤", "”", "€", "Õ", "þ", "É", "·", "2", "º", "ü", "A", "n", "¸", "Y", "s", "0", "*", "¹", "á", "ß", "/", "Ü", "z", "k", "Þ", "Ã", "%", "¶", ",", "g", "6", "Ø", "Á", "@", ")", "O", "ƒ", "¥", "™", "õ", "â", "8", "N", "ä", "ç", "Ù", "`", "›", "é", "½", "X", "P", "K", "1", "è", "ò", "Ï", "S", ".", "S", "¢", "È", "H", "“", "ã", "i", "©", "L", "Ž", "ú", "'", "µ", "¨", "¡", "ñ", "Š", "=", "ù", "!", "Ê", "5", "å", "Ó", "-", "[", "’", "\\", "–", "S", "N", "æ", "Ò", ">", "<", "&", "…", "G", "Ö", "§", "Å", "‹", "Y", "d", "}", "U", "V", "(", "C", "h", "—", "ì", "ó", "m", "ø", "ð", "\"", "Ñ", "¾", "°", "B", "à", "Ý", "«", "Ë", "]", "Œ", "ž", "œ", "‚", "Ú", "R", "l", "?", "~", ";", "®", "j", "³", "÷", "7", "¯", "c", "í", "w", "­", "Ç", "Q", "W", "J", "r", "ô", "u", "v", "_", "p", "M", "F", "¬", "¦", "3", "b", "Û", "P", "|", "Ì", "9", ":", "y", "¼", "x", "4", "†", "ï", " ", "+", "f", "ë", "˜", "T", "$", "´", "×", "Ð", "o", "Ÿ", "Z", "t", "E", "ª", "ö", "•", "û", "Ô", "Ä", "H", "Í", "q", "ÿ", "„", "À", "#", "Æ", "‘", "Â", "±", "‰", "a", "‡", "^", "e", "£", "I", "ê", "¿" ];
            break;
        case 4:
            masterTable = [ "f", "î", "T", "Ã", "Æ", "6", "Å", "¡", "ü", "¬", "Í", "¢", " ", "Ô", "^", ">", "0", "h", "ä", "Ê", "-", "\"", "[", "Ó", "Ç", "º", "?", "¶", "ë", "<", "B", "·", "å", "Ä", "I", "‹", "à", "a", "2", "Ÿ", "k", "v", "»", "«", "µ", "Ì", ",", "&", "i", "ª", "q", "!", "ã", "³", "K", "Ò", "S", "÷", "ÿ", "‰", "\\", "P", "Y", "…", "ß", "¨", "„", "S", "ð", "ç", "(", "e", "=", "Œ", "J", "í", "F", "Ú", "ó", ";", "×", "•", "–", "©", "¦", "H", "D", "x", "Ý", "´", "ñ", "Q", "Š", "y", "È", "Ñ", "|", "š", "C", "˜", "w", "æ", "Ü", "ú", "]", "Õ", "é", "E", "¤", "ö", "Þ", "‘", "$", "ì", "1", "Ø", "G", "7", "m", "²", "}", "Y", "`", "ù", "Û", "þ", "s", "œ", "c", "¸", "â", "Z", "½", "ƒ", "M", "p", "è", "±", "5", "”", "¹", "O", "ø", "u", "8", ")", "¼", "ò", "—", "d", "R", "~", "Ù", "Î", "_", "r", "o", "N", "£", "W", "õ", "H", "®", "­", "3", "ê", "¿", "¾", "Ë", "™", "n", "4", "P", "¯", "X", "ý", "#", "%", "†", "{", ".", "A", "'", "V", "@", "t", "¥", "*", "ˆ", "B", "É", "L", "À", "Ž", "l", "ô", "z", "ï", "°", "Ð", "‡", "§", "S", "/", "ž", "g", ":", "û", "€", "›", "+", "‚", "Ï", "Á", "N", "U", "9", "j", "’", "á", "Â", "b", "Ö", "“" ];
            break;
        case 5:
            masterTable = [ "É", "P", "”", "l", "¨", "Œ", "‘", "m", "7", "\"", "ë", "z", "ƒ", "Š", "\\", "`", "û", "_", "*", "‹", "I", "¢", "¹", "¬", "À", "n", "ü", "×", "9", "‰", "?", "è", "ç", ":", "æ", "¡", "Õ", "†", "q", "ï", ",", "s", "D", "Í", "©", "¥", "f", "6", "Â", "õ", "4", "ù", "+", "È", "—", "a", "(", "á", "²", "B", "K", ")", "Ø", "³", "ä", "}", "ß", "P", "|", "Æ", "º", "E", "Ÿ", "¸", "¦", "=", "j", "í", "o", "Y", "ª", "W", "¿", "h", "°", "ý", "î", "±", "œ", "þ", "/", "Å", "Ê", "S", "Ù", "Z", "¯", "#", "˜", "S", "•", "¾", "k", "]", "´", "ð", "–", "X", "H", "›", "ñ", "ž", "<", "w", "B", " ", "Ç", "J", "H", "Ì", "2", "½", "Ä", "é", "Ï", "ì", "ò", "»", "F", "’", "Þ", "Ô", "5", "ÿ", "£", "y", "Ó", "·", "V", "M", "‡", "%", "Ë", "Ü", "«", "µ", "ã", "â", "U", "ö", "x", "¶", "{", "c", "O", "N", "„", "[", "ô", ">", "N", "ê", "r", "$", "i", "ú", "v", "¼", "ó", "3", "^", "¤", "e", "p", "@", "Û", "R", "Ö", "T", "š", "Î", ";", "1", "Ò", "L", "C", "Ú", ".", "-", "Á", "“", "~", "'", "u", "S", "Ý", "b", "Ã", "÷", "G", "à", "ˆ", "å", "!", "®", "Ž", "Q", "‚", "t", "­", "&", "Y", "d", "™", "8", "ø", "A", "€", "Ñ", "…", "0", "§", "Ð", "g" ];
            break;
        case 6:
            masterTable = [ "‚", "ý", "³", "û", ":", "Ò", "4", "+", "œ", "f", "â", "š", "I", "‰", "­", "~", "ù", "i", "ö", "ª", "§", "·", "²", "±", "N", "B", "Y", "d", "'", "l", "Ç", "*", "D", "e", "»", "ç", "ñ", "ˆ", "ï", "Ü", ";", "É", "T", "—", "æ", "€", ".", "¨", "g", "Ð", "“", "÷", "ò", "0", "Í", "Z", "x", "î", "ã", "G", "µ", "…", "˜", "¯", "†", "X", "„", "Ó", "°", "Æ", "|", "½", "W", "b", "ô", "A", "K", "\"", "E", "®", "Ã", "Ý", "Å", "Þ", "£", "!", "N", "ð", "Ì", "¾", "B", ",", "‘", "è", "k", "Â", "ä", "™", "ì", "ß", "U", "Î", "º", "S", "z", "•", "Á", "’", "1", "Õ", "?", "/", "õ", "þ", "(", "Ê", "Œ", "t", "ž", "ü", "Ä", "J", "È", "¥", "Ñ", "Û", "_", "¿", "í", "Š", "O", "¢", "Ÿ", "p", "ø", " ", "¶", "n", "Ú", "á", "¡", "j", "y", "À", "ÿ", "C", "å", "¦", "Q", "<", "ƒ", "$", "[", "u", "\\", "Ë", "”", "#", "©", "‡", "´", "2", "L", "Ù", "7", "}", "q", "r", "R", "à", "v", "c", "¸", "S", "3", "&", "Ž", "m", "¬", "S", "h", "Ï", "×", "P", "ú", "Ø", "‹", "-", "ê", "›", "é", "H", "V", "H", "¼", "w", "ó", ">", "M", "¤", "ë", ")", "P", "^", "=", "Y", "¹", "–", "{", "`", "8", "9", "a", "F", "o", "]", "Ö", "6", "Ô", "s", "5", "«", "@", "%" ];
            break;
        case 7:
            masterTable = [ ",", ";", "²", "ä", "Ã", "z", "¤", "°", "ñ", "7", "Ð", "i", "©", "À", "1", "r", "g", "·", "Œ", "þ", "³", "@", "—", "¹", "Ö", "¥", "Ç", "ˆ", "8", "è", "½", "(", "k", "Ë", "h", "¶", "Û", "ª", "Ú", "{", "ç", "B", "f", "C", "}", "u", "¨", "¯", "¸", "Ä", "ß", "±", "&", "›", "Y", "ú", "á", "d", "ï", "Ì", ".", "!", "í", "­", "I", "E", "’", "0", "x", "Ø", "\"", "j", "Ó", "J", "™", "+", "Þ", "Z", "P", ":", "û", "-", "U", "A", "c", "n", "Ž", "ÿ", "P", "ð", "„", "_", ")", "«", "%", "ì", ">", "Ý", "O", "a", "Å", "N", "º", "§", "ê", "Ñ", "S", "V", "p", "o", "b", "Š", "5", "S", "^", "y", "<", "×", "Ï", "6", "Ÿ", "î", "é", "R", "”", "3", "m", "2", "Î", "w", "¼", "¦", "ƒ", "Q", "G", "‚", " ", "»", "¡", "e", "ü", "Â", "X", "ô", "à", "Y", "L", "Õ", "¾", "'", "¿", "H", "$", "å", "ž", "Á", "=", "S", "¬", "‰", "`", "Ü", "l", "Í", "“", "Ù", "s", "\\", "F", "Æ", "q", "É", "È", "†", "N", "ö", "t", "?", "®", "ù", "B", "õ", "´", "ë", "£", "Ê", "‡", "ó", "ò", "]", "[", "9", "š", "K", "€", "•", "ý", "/", "ø", "œ", "W", "–", "‘", "4", "ã", "~", "‹", "D", "*", "T", "Ò", "v", "˜", "|", "#", "¢", "…", "Ô", "M", "µ", "â", "÷", "æ", "H" ];
            break;
        case 8:
            masterTable = [ "*", "ý", "À", "Æ", "/", "_", "O", "K", "µ", "é", "E", "§", "Ž", "I", "ô", "H", "%", "Ä", "@", "ü", "v", "f", "`", "S", "³", "¼", "‰", "M", "‡", "×", ",", "à", "ú", "+", "a", "Ú", "=", "¿", "<", "N", "X", "Å", "„", "F", "?", "˜", "÷", "5", "°", "D", "b", "!", "»", "\"", "Â", "#", "›", "€", "Ã", "1", "î", "Ø", "9", "k", "·", ">", "š", "Á", "á", "Ñ", "©", "­", "ò", "ä", "¡", "ƒ", "õ", "R", "Ì", "\\", "‚", "È", "n", "~", "ð", "w", "u", "Ô", "L", "Ç", "ë", "ç", "W", "œ", "-", "B", "[", "q", "²", "ì", "±", "’", "†", "U", "Ü", "º", "p", "¨", "ÿ", "Z", "S", "¤", "•", "Š", "2", "å", ":", "ª", "Ð", "—", "¬", "s", "ñ", "P", "G", "Œ", "t", "Y", "Ù", "|", "i", "N", "^", "S", "ï", "–", "¹", "…", "¶", "¢", "‹", "þ", "T", "ø", "®", "Ê", "C", "ó", "o", "«", "Î", "&", "£", "Ö", "z", "æ", "3", "V", "Í", "ê", "û", "ß", "‘", ";", "e", "{", "B", "Õ", "l", "4", "7", "“", "Ÿ", "J", "(", "r", "'", "Q", "$", "½", "í", "d", "Ï", "H", "Û", "x", "0", "6", "™", "´", "P", "Ó", "Ë", "8", "Þ", "A", "¦", "ö", "y", "g", "è", "¯", "¸", "]", "ˆ", "¥", "”", "¾", "Ò", "É", "ã", " ", "m", "h", "Ý", "Y", ".", "}", "ž", "ù", "â", "j", ")", "c" ];
            break;

    }
}


function evaluateValidCaracter( string, verificationType ) {
    verificationType = Number(verificationType);
    switch (verificationType){
        case 1:
            invalidCaracters = []; 
            array = string.split('');
            array.forEach(character => {
                let valid = masterTable.findIndex(item => item === character); 
                if (valid === -1) {
                    invalidCaracters.push(character); 
                }
            });
            invalidHtml.innerHTML = invalidCaracters.join(' - '); 
            break;
        case 2:
            let privateInvalidCharacters = []
    
            array = string.split('');
            
            array.forEach(character => {
                let valid = masterTable.findIndex(item => item === character); 
                if (valid === -1) {
                    privateInvalidCharacters.push(character); 
                }
            });
            

            if ( privateInvalidCharacters.length > 0 ){
                optionMessage = [
                    {state: false, message: `The key contains invalid characters: ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `La llave contiene carácteres inválidos: ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `La clé de chiffrement contient des caractères invalides : ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `A chave de criptografia contém caracteres inválidos: ${privateInvalidCharacters.join(' - ')}`}
                ]
                console.log(optionMessage[1])
                return {state: false, array: array};
            } 
            else{
                return {state: true, array: array};
            }
    }
    
}

function createKey( string ){
    
    let validKey = evaluateValidCaracter( string, 2 );
    if (validKey.state){
        keyArray = validKey.array.map(character => masterTable.findIndex(item => item === character));
        console.log(keyArray)
    }
    
}


function encryptMessage( string ){

    let validMessage = evaluateValidCaracter( string, 2 );

    if( validMessage.state ){

        originalValidMessage = validMessage.array;
        originalKey = keyArray.map(key => key);
        if ( originalKey.length < 0 ){
            optionMessage = [
                {state: false, message: `The key is empty, please create a key.`},
                {state: false, message: `La llave está vacía, por favor cree una llave.`},
                {state: false, message: `La clé de chiffrement est vide, veuillez en créer une.`},
                {state: false, message: `A chave de criptografia está vazia, por favor, crie uma.`}
            ]
            console.log(optionMessage[1])
            return false
        } 

        messageIndex = validMessage.array.map(character => masterTable.findIndex(item => item === character));
        let newMessageEncrypted = []
        originalValidMessage.forEach(
            character =>{
                if (originalKey.length < 1){
                    originalKey = keyArray.map(key => key);
                }
                let item = originalKey.shift();
                newMessageEncrypted.push({character, item});
            }
        )
        console.log(newMessageEncrypted)
        
    }
}

asingMasterTable( 8 )
console.log(masterTable)
let inputHtml = document.getElementById("phraseTest");
let invalidHtml = document.getElementById("invalidTest");
invalidHtml.innerHTML = "";



inputHtml.addEventListener("input"||"keydown", function(){
    
    evaluateValidCaracter( inputHtml.value )
})

createKey( "This is me trying" );
console.log(keyArray)
encryptMessage( "Holaa, soy Taylor Me gusta júgár." )