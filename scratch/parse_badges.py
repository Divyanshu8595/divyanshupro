import json

def parse_badges():
    file_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\f68ab7fa-47bb-4607-a30d-27dae07e4480\.system_generated\steps\161\content.md"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Remove metadata lines before JSON
    json_start = content.find('{"data":')
    if json_start != -1:
        content = content[json_start:]
    
    # Clean up trailing spaces or markdown characters if any
    content = content.strip()
    
    try:
        data = json.loads(content)
        for i, badge in enumerate(data.get("data", [])):
            template = badge.get("badge_template", {})
            issuer = template.get("issuer", {}).get("summary", "Unknown Issuer")
            print(f"{i+1}. Name: {template.get('name')}")
            print(f"   Issuer: {issuer}")
            print(f"   Date: {badge.get('issued_at_date')}")
            print(f"   URL: {template.get('url')}")
            print(f"   Image URL: {template.get('image_url')}")
            print("-" * 50)
    except Exception as e:
        print("Error parsing JSON:", e)

if __name__ == '__main__':
    parse_badges()
