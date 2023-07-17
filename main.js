// ==UserScript==
// @name         JobsApplyAutoFillScript
// @namespace    https://github.com/liaoyufu-leo/JobsApplyAutoFillScript
// @version      0.1.0
// @description  This is a script running on Tampermonkey browser extension. It will auto fill infomation while applying jobs and will never upload your private infomation.
// @author       liaoyufu-leo
// @match        *://*/*
// @noframes
// @grant        GM_registerMenuCommand
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @require      https://raw.githubusercontent.com/liaoyufu-leo/JobsApplyAutoFillScript/master/autofill.js

// @require      file://C:\Users\liaoy\OneDrive\Desktop\JobsApplyAutoFillScript\autofill.js
// ==/UserScript==

const info = {
    "firstName": "Yufu",
    "lastName": "Liao",
    "email": "liaoyufu1998@gmail.com",
    "phone": "5715194841",
    "phoneExtension": "1"
};

function main(){
    GM_registerMenuCommand('Autofill', autofill);
}

main();

