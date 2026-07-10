import json

def format_badges():
    with open("scratch/badges.json", "r", encoding="utf-8") as f:
        badges = json.load(f)
        
    ts_code = "export const CERTIFICATIONS = [\n"
    for b in badges:
        ts_code += "  {\n"
        ts_code += f"    name: {repr(b['name'])},\n"
        ts_code += f"    issuer: {repr(b['issuer'])},\n"
        ts_code += f"    date: {repr(b['date'])},\n"
        ts_code += f"    url: {repr(b['url'])},\n"
        ts_code += f"    imageUrl: {repr(b['image_url'])},\n"
        ts_code += "  },\n"
    ts_code += "];\n"
    
    with open("scratch/formatted_badges.txt", "w", encoding="utf-8") as out:
        out.write(ts_code)
    print("Done formatting. Copied to scratch/formatted_badges.txt")

if __name__ == '__main__':
    format_badges()
