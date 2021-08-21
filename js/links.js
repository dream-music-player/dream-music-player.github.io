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
    "https://www.youtube.com/watch?v=Gp9gFXf56yQ",
    "https://www.youtube.com/watch?v=kxWUcCUfDuE"
];
var urls = [];

async function generateLinks() {
    for (let i = 0, len = videoUrls.length; i < len; i++) {
        let info = await getInfo(videoUrls[i]);
        urls.splice(i, 1, info["formats"][21]["url"]);
    }
}

var coverUrls = [
    "https://i.ytimg.com/vi/Ow_PNMtMGhU/hqdefault.jpg",
    "https://i.ytimg.com/vi/lx-__lBS6a4/hqdefault.jpg",
    "https://i.ytimg.com/vi/kxWUcCUfDuE/hqdefault.jpg"
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

async function load() {
    await generateLinks();
    console.log(urls[0]);
    document.getElementById('audio').src = urls[0];
}

document.getElementById('cover').src = getDefaultCover();
document.getElementById('title').innerHTML = "roadtrip";
