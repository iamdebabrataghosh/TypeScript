///<reference path="fourslash.ts" />
// @allowJs: true
// @Filename: Foo.js
/////**
//// * @param {string} p1 - A string param
//// * @param {string?} p2 - An optional param
//// * @param {string} [p3] - Another optional param
//// * @param {string} [p4="test"] - An optional param with a default value
//// */
////function f1(p1, p2, p3, p4){}
////f1(/*1*/'foo', /*2*/'bar', /*3*/'baz', /*4*/'qux');

verify.signatureHelp(
    { marker: "1", parameterDocComment: "- A string param" },
    { marker: "2", parameterDocComment: "- An optional param" },
    { marker: "3", parameterDocComment: "- Another optional param" },
    { marker: "4", parameterDocComment: "- An optional param with a default value" },
);
