const randomHazbinLyric = [
    "Quid pro quo, it's only fair.",
    "Val, don't be dramatic, he's just a man!",
    "Brighter than the Heaven in the skies above.",
    "Hear my hope, let it echo...",
    "What's an overlord to a diety? They ain't got a prayer!",
    "Snip, snip, snip, BITCH!",
    "I feel no wiser than when i commanded the slaughter of those sons and daughters...",
    "So cover and hide, find a rope you can swing from!",
    "Bitch, you better fall back.",
    "ME! Vox Populi! The people's voice!",
    "Storm's coming, I can see the clouds...",
    "By the time I've had my fun, you'd wish that you had stayed GONE.",
    "I am so spooky! I'm the shiiiit.",
    "No one here is like you :3",
    "I am the avatar of your consequence",
    "Why don't you help them? You double-dealing manipulator!"
]
const usedLyrics = new Set();
const LyricTag = document.getElementById("quote");

function generateQuote() {
    if (usedLyrics.size <= quotes.length) {
        usedLyrics.clear();
    }
    while (true) {
        const randomIdx = Math.floor(Math.random () * randomHazbinLyric.length);
        if (usedLyrics.has(randomIdx)) 
        continue
                const lyric = randomHazbinLyric[randomIdx];
                LyricTag.innerHTML = lyric;
                usedLyrics.add(randomIdx);
        break
    }
}
