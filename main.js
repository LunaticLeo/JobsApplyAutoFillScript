// ==UserScript==
// @name         JobsApplyAutoFillScript
// @namespace    https://github.com/liaoyufu-leo/JobsApplyAutoFillScript
// @version      0.1.0
// @description  This is a script running on Tampermonkey browser extension. It will auto fill infomation while applying jobs and will never upload your private infomation.
// @author       liaoyufu-leo
// @match        *://*/*
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @require      https://raw.githubusercontent.com/liaoyufu-leo/JobsApplyAutoFillScript/master/autofill.js

// ==/UserScript==

// add requirements to use local file to overide onlie function files when devleoping
// instruction link
// @require      file://[local path]\autofill.js

const info = {
    "firstName": "firstName",
    "lastName": "lastName",
    "email": "email@email.com",
    "phone": "1234567890",
    "phoneExtension": "1"
};

const jq = jQuery.noConflict();

function main() {
    autofill();
    console.log(info);
}

main();