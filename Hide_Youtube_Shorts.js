// ==UserScript==
// @name         Hide YouTube Shorts Button
// @namespace    http://tampermonkey.net/
// @version      2024-02-21
// @description  Hide the Shorts button on YouTube
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Hide the Shorts button on YouTube
    function hideShortsButton() {
        var shortsButton = document.querySelector('a[title="Shorts"]');
        if (shortsButton) {
            shortsButton.style.display = 'none';
        }
    }

    // Run the function when the DOM content is loaded
    document.addEventListener('DOMContentLoaded', function() {
        hideShortsButton();
    });

    // MutationObserver to handle changes in the DOM
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            hideShortsButton();
        });
    });

    // Start observing changes in the DOM
    observer.observe(document, { childList: true, subtree: true });

})();
