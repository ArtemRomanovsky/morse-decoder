const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const j = expr.length / 10;
    let TenSymbols = '';
    let twoFirstSymbols = '';
    let arrayOneLetter = [];
    let letter = '';
    let stringConvertLetter = '';
    let finalString = '';
    let copyExpr = expr;
    for (let i = 0; i < j; i++) {
        TenSymbols = copyExpr.slice(0, 10);
        copyExpr = copyExpr.substring(10);
        if (TenSymbols === '**********') {
            finalString += ' ';
        } else {
            for (let i = 0; i < 5; i++) {
                twoFirstSymbols = TenSymbols.slice(0, 2);
                TenSymbols = TenSymbols.substring(2);
                if (twoFirstSymbols === '10') {
                    arrayOneLetter.push('.');
                }
                if (twoFirstSymbols === '11') {
                    arrayOneLetter.push('-');
                }
            }
            stringConvertLetter = arrayOneLetter.join('');
            letter = getRightLetterfromMorze(stringConvertLetter);
            finalString += letter;
            arrayOneLetter = [];
        }
    }
    return finalString;
}

module.exports = {
    decode
}
decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010');

function getRightLetterfromMorze(string) {
    switch (string) {
        case '.-': return 'a';
        case '-...': return 'b';
        case '-.-.': return 'c';
        case '-..': return 'd';
        case '.': return 'e';
        case '..-.': return 'f';
        case '--.': return 'g';
        case '....': return 'h';
        case '..': return 'i';
        case '.---': return 'j';
        case '-.-': return 'k';
        case '.-..': return 'l';
        case '--': return 'm';
        case '-.': return 'n';
        case '---': return 'o';
        case '.--.': return 'p';
        case '--.-': return 'q';
        case '.-.': return 'r';
        case '...': return 's';
        case '-': return 't';
        case '..-': return 'u';
        case '...-': return 'v';
        case '.--': return 'w';
        case '-..-': return 'x';
        case '-.--': return 'y';
        case '--..': return 'z';
        case '.----': return '1';
        case '..---': return '2';
        case '...--': return '3';
        case '....-': return '4';
        case '.....': return '5';
        case '-....': return '6';
        case '--...': return '7';
        case '---..': return '8';
        case '----.': return '9';
        case '-----': return '0';
        default: return null;
    }
}