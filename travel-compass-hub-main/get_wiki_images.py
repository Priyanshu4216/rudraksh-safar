import requests
import json

attractions = [
    "Nong Nooch Tropical Botanical Garden",
    "Coral Island Pattaya",
    "Tiger Park Pattaya",
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
    
    "Phi Phi Islands",
    "Khao Phing Kan",
    "Phuket FantaSea",
    "Dolphins Bay Phuket",
    "Tiger Kingdom Phuket",
    
    "Na Muang Safari Park",
    "Wat Phra Yai",
    "Mu Ko Ang Thong National Marine Park"
]

def get_image(query):
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={query}&utf8=&format=json"
    try:
        res = requests.get(search_url).json()
        if res['query']['search']:
            title = res['query']['search'][0]['title']
            img_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={title}&prop=pageimages&format=json&pithumbsize=800"
            res2 = requests.get(img_url).json()
            pages = res2['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    return pages[page_id]['thumbnail']['source']
    except Exception:
        pass
    return None

results = {}
for a in attractions:
    res = get_image(a)
    if res:
        print(f'"{a}": "{res}",')
    else:
        print(f'"{a}": "NOT_FOUND",')
