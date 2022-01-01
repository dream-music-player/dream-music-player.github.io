var urls = [];

const coverUrls = [
    "https://i.ytimg.com/vi/Ow_PNMtMGhU/hqdefault.jpg",
    "https://i.ytimg.com/vi/Gp9gFXf56yQ/hqdefault.jpg",
    "https://i.ytimg.com/vi/kxWUcCUfDuE/hqdefault.jpg"
];

function getDefaultLink() {
    return urls[0];
}

async function load() {
    let info = await fetch('https://269bdcbf-8e2f-4567-bfd0-5179d00382ba.id.repl.co/dream-music');
    urls = await info.json();
    document.getElementById('audio').src = urls[0];
}

document.getElementById('cover').src = coverUrls[0];
document.getElementById('title').innerHTML = "roadtrip";
