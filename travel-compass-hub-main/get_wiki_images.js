import fs from 'fs';

const attractions = [
    "Nong Nooch Tropical Botanical Garden",
    "Ko Lan",
    "Pattaya Tiger Park",
    "Alcazar Cabaret Pattaya",
    "Underwater World Pattaya",
    "Tiffany's Show Pattaya",
    "Ramayana Water Park",

    "Safari World Bangkok",
    "Chao Phraya River",
    "Wat Arun",
    "Dream World Bangkok",
    "Mahanakhon SkyWalk",
    "Sea Life Bangkok Ocean World",

    "Ko Poda",
    "Railay Beach",
    "Khao Phanom Bencha National Park",
    "Krabi Town",
    "Elephant Nature Park",

    "Ko Phi Phi Le",
    "Khao Phing Kan",
    "Phuket FantaSea",
    "Dolphins Bay Phuket",
    "Tiger Kingdom Phuket",

    "Na Muang",
    "Wat Phra Yai",
    "Mu Ko Ang Thong National Marine Park",
    "Ko Samui"
];

async function getImage(query) {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`;
    try {
        const res = await fetch(searchUrl);
        const data = await res.json();

        if (data.query.search.length > 0) {
            const title = data.query.search[0].title;
            const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800`;
            const res2 = await fetch(imgUrl);
            const data2 = await res2.json();
            const pages = data2.query.pages;

            for (let page_id in pages) {
                if (pages[page_id].thumbnail) {
                    return pages[page_id].thumbnail.source;
                }
            }
        }
    } catch (e) {
    }
    return null;
}

async function run() {
    const output = {};
    for (const a of attractions) {
        const url = await getImage(a);
        if (url) {
            output[a] = url;
        } else {
            output[a] = "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670";
        }
    }
    fs.writeFileSync('images.json', JSON.stringify(output, null, 2));
}

run();
