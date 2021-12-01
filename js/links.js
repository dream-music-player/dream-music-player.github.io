function getIndex(song) {
    song = song || "roadtrip";
    switch (song) {
        case "roadtrip":
            return 0;
        case "mask":
            return 1;
        case "change my clothes":
            return 2;
        default:
            return 0;
    }
}

const videoUrls = [
    "https://www.youtube.com/watch?v=Ow_PNMtMGhU",
    "https://www.youtube.com/watch?v=Gp9gFXf56yQ",
    "https://www.youtube.com/watch?v=kxWUcCUfDuE"
];
var urls = [];

async function generateLinks() {
    for (let i = 0, i < videoUrls.length; i++) {
        let info = await getInfo(videoUrls[i]);
        urls.splice(i, 1, info["formats"][21]["url"]);
    }
}

const coverUrls = [
    "https://i.ytimg.com/vi/Ow_PNMtMGhU/hqdefault.jpg",
    "https://i.ytimg.com/vi/Gp9gFXf56yQ/hqdefault.jpg",
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
    document.getElementById('audio').src = urls[0];
}

document.getElementById('cover').src = getDefaultCover();
document.getElementById('title').innerHTML = "roadtrip";
