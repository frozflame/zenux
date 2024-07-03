// from Python stdlib string
export const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
export const ascii_uppercase = ascii_lowercase.toUpperCase();
export const ascii_letters = ascii_lowercase + ascii_uppercase;
export const digits = '0123456789';
export const octdigits = '01234567';
export const hexdigits = '0123456789abcdefABCDEF';
export const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
export const whitespace = ' \t\n\r\v\f';
export const printable = digits + ascii_letters + punctuation + whitespace;

