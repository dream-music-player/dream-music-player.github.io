function getIndex(song) {
    song = song || "roadtrip";
    switch (song) {
        case "roadtrip":
            return 0;
        case "mask":
            return 1;
        default:
            return 0;
    }
}

var videoUrls = [
    "https://www.youtube.com/watch?v=Ow_PNMtMGhU",
    "https://www.youtube.com/watch?v=Gp9gFXf56yQ"
];
var urls = [];

for (var i = 0, len = videoUrls.length; i < len; i++) {
    getInfo(videoUrls[i]).then(info => {
        urls.push(info["formats"][21]["url"]);
    });
}

var coverUrls = [
    "https://i.ytimg.com/vi/Ow_PNMtMGhU/hqdefault.jpg",
    "https://i.ytimg.com/vi/lx-__lBS6a4/hqdefault.jpg"
];

function getDirectLink() {
    let song = document.getElementById('title').innerHTML;
    return urls[getIndex(song)];
}

function getCoverLink(song) {
    return coverUrls[getIndex(song)];
}

function waitFor(condition, callback) {
    if (!condition()) {
        window.setTimeout(waitFor.bind(null, condition, callback), 100);
    } else {
        callback();
    }
}

window.onload = function() {
    waitFor(() => (videoUrls.length === urls.length), () => document.getElementById('audio').src = getDirectLink());
    document.getElementById('cover').src = getCoverLink();
}
