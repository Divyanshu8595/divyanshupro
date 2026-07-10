import urllib.request
import json

def fetch_badges():
    url = "https://www.credly.com/users/divyanshu-cloud/badges.json"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8')
            data = json.loads(content)
            
            badges_list = []
            for badge in data.get("data", []):
                template = badge.get("badge_template", {})
                issuer_summary = template.get("issuer", {}).get("summary", "issued by Google Cloud")
                
                badge_info = {
                    "name": template.get("name"),
                    "issuer": issuer_summary.replace("issued by ", ""),
                    "date": badge.get("issued_at_date"),
                    "url": template.get("url"),
                    "image_url": template.get("image_url")
                }
                badges_list.append(badge_info)
                
            print(json.dumps(badges_list, indent=2))
            
            # Also save to a json file for later use
            with open("scratch/badges.json", "w", encoding="utf-8") as out:
                json.dump(badges_list, out, indent=2)
                
    except Exception as e:
        print("Error fetching/parsing badges:", e)

if __name__ == '__main__':
    fetch_badges()
