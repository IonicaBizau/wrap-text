"use strict";

/**
 * wrapText
 * Wrap text by a given width.
 *
 * @name wrapText
 * @function
 * @param {String} input The input text.
 * @param {Number} width The wrapping width.
 * @param {boolean} shouldBreak If the text should break.
 * @return {String} The wrapped text.
 */
module.exports = function wrapText(input, width, shouldBreak = false) {
    width = parseInt(width) || 80;

    if (shouldBreak) {
        let arr = []
        let start = 0
        let end = width
        let i = 1
        while (start <= input.length) {
            arr.push(input.substring(start, end))
            start = width * i
            i = i + 1
            end = width * i
        }
        return arr.join("\n")
    } else {
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
    }
};
