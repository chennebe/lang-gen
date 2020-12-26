let Phoneme = class {
	constructor(sampa, fullname, uchar, pronounce) {
		this.sampa = sampa;
		this.fullname = fullname;
		this.uchar = uchar;
		this.pronounce = pronounce; // interpretation of pronunciation in english
	}
}

// unicode to phoneme instance
let vowels = { 
	'\u0069' : new Phoneme("i", "close front unrounded vowel", '\u0069', "ee"),
	'\u0079' : new Phoneme("y", "close front rounded vowel", '\u0079', "ew"),
	'\u0268' : new Phoneme("1", "close central unrounded vowel", '\u0268', "ue"),
	'\u0289' : new Phoneme("}", "close central rounded vowel", '\u0289', "u"),
	'\u026F' : new Phoneme("M", "close back unrounded vowel", '\u026F', "uh"),
	'\u0075' : new Phoneme("u", "close back rounded vowel", '\u0075', "oo"),
	'\u026A' : new Phoneme("I", "near-close front unrounded vowel", '\u026A', "ih"),
	'\u028F' : new Phoneme("Y", "near-close front rounded vowel", '\u028F', "euh"),
	'\u028A' : new Phoneme("U", "near-close back rounded vowel", '\u028A', "ooh"),
	'\u0065' : new Phoneme("e", "close-mid front unrounded vowel", '\u0065', "ay"),
	'\u00F8' : new Phoneme("2", "close-mid front rounded vowel", '\u00F8', "eu"),
	'\u0258' : new Phoneme("@\\", "close-mid central unrounded vowel", '\u0258', "uhh"),
	'\u0275' : new Phoneme("8", "close-mid central rounded vowel", '\u0275', "euhh"),
	'\u0264' : new Phoneme("7", "close-mid back unrounded vowel", '\u0264', "uuh"),
	'\u006F' : new Phoneme("o", "close-mid back rounded vowel", '\u006F', "aw"),
	'\u0065\u031E' : new Phoneme("e_o", "mid front unrounded vowel", '\u0065\u031E', "a"),
	'\u00F8\u031E' : new Phoneme("2_o", "mid front rounded vowel", '\u00F8\u031E', "oeu"),
	'\u0259' : new Phoneme("@", "mid central vowel", '\u0259', "oeuh"),
	'\u0264\u031E' : new Phoneme("", "mid back unrounded vowel", '\u0264\u031E', "auh"),
	'\u006F\u031E' : new Phoneme("", "mid back rounded vowel", '\u006F\u031E', "ough"),
	'\u025B' : new Phoneme("E", "open-mid front unrounded vowel", '\u025B', "eh"),
	'\u0153' : new Phoneme("9", "open-mid front rounded vowel", '\u0153', "oeugh"),
	'\u025C' : new Phoneme("3", "open-mid central unrounded vowel", '\u025C', "ugh"),
	'\u025E' : new Phoneme("3\\", "open-mid central rounded vowel", '\u025E', "ouh"),
	'\u028C' : new Phoneme("V", "open-mid back unrounded vowel", '\u028C', "ouhh"),
	'\u0254' : new Phoneme("O", "open-mid back rounded vowel", '\u0254', "oh"),
	'\u00E6' : new Phoneme("{", "near-open front unrounded vowel", '\u00E6', "ae"),
	'\u0250' : new Phoneme("6", "near-open central vowel", '\u0250', "augh"),
	'\u0061' : new Phoneme("a", "open front unrounded vowel", '\u0061', "ah"),
	'\u0276' : new Phoneme("&", "open front rounded vowel", '\u0276', "aeuh"),
	'\u0061\u0308' : new Phoneme("a_\"", "open central unrounded vowel", '\u0061\u0308', "ahh"),
	'\u0251' : new Phoneme("A", "open back unrounded vowel", '\u0251', "awh"),
	'\u0252' : new Phoneme("Q", "open back rounded vowel", '\u0252', "oah")
}
