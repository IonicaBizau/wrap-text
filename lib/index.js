"use strict";

/**
 * wrapText
 * Wrap text by a given width.
 *
 * @name wrapText
 * @function
 * @param {String} input The input text.
 * @param {Number} width The wrapping width.
 * @return {String} The wrapped text.
 */
module.exports = function wrapText (input, width) {
    width = parseInt(width) || 80;
    let res = []
      , cLine = ""
      , words = input.split(" ")
      ;

    for (let i = 0; i < words.length; ++i) {
        let cWord = words[i];
        if ((cLine + cWord).length <= width) {
            cLine += (cLine ? " " : "") + cWord;
        } else {
            res.push(cLine);
            cLine = cWord;
        }
    }

    if (cLine) {
        res.push(cLine);
    }

    return res.join("\n");
};
