/// <reference path='fourslash.ts' />

/////**
////    * Returns the substring at the specified location within a String object.
////    * @param start The zero-based index integer indicating the beginning of the substring.
////    * @param end Zero-based index integer indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
////    * If end is omitted, the characters from start through the end of the original string are returned.
////    */
////function foo(start: number, end?: number) {
////    return "";
////}
////
////foo(/*1*/

verify.signatureHelp({ marker: "1", parameterDocComment: "The zero-based index integer indicating the beginning of the substring." });
edit.insert("10,");
verify.signatureHelp({ parameterDocComment: "Zero-based index integer indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned." });
edit.insert("  ");
verify.signatureHelp({ parameterDocComment: "Zero-based index integer indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned." });
