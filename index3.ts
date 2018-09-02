//type assertion if you must tell typescript that a var is a string even thous it was listed as any

let definatelyNotAString: any = 'I am a string';

//this may throw an error to avoid that see below
let strLength = definatelyNotAString.length;

let strLengthBetter = (<string> definatelyNotAString).length;
