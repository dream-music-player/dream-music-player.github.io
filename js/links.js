let loaded = false;

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

for (let i = 0, len = videoUrls.length; i < len; i++) {
    getInfo(videoUrls[i]).then(info => {
        urls.splice(i, 1, info["formats"][21]["url"]);
    });
}

var coverUrls = [
    "https://i.ytimg.com/vi/Ow_PNMtMGhU/hqdefault.jpg",
    "https://i.ytimg.com/vi/lx-__lBS6a4/hqdefault.jpg"
];

function getDefaultLink() {
    return urls[0];
}

function getDefaultCover() {
    return coverUrls[0];
}

function getDirectLink(song) {
    return urls[getIndex(song)];
}

function getCoverLink(song) {
    return coverUrls[getIndex(song)];
}

function isLoaded() {
    return loaded;
}

function waitFor(condition, callback) {
    if (!condition()) {
        window.setTimeout(waitFor.bind(null, condition, callback), 100);
    } else {
        callback();
    }
}

function load() {
    document.getElementById('audio').src = getDefaultLink();
    loaded = true;
}

waitFor(() => (videoUrls.length === urls.length), () => load());
document.getElementById('cover').src = getDefaultCover();
document.getElementById('title').innerHTML = "roadtrip";
