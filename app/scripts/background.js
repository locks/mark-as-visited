'use strict';

function markAsVisited(info /*, tab */) {
    console.log('url', info.linkUrl);
    chrome.history.addUrl({ url: info.linkUrl }, function() {
      console.log("added?");
    });
}

chrome.contextMenus.create({
    id: 'mark-as-visited',
    title: 'Mark as Visited',
    contexts: ['link'],
    onclick: markAsVisited
});
