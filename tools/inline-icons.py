import re
from pathlib import Path

root = Path("/home/smouj/.openclaw/workspace/main/projects/socialmedia-smouj013")
html_path = root / "index.html"
html = html_path.read_text(encoding="utf-8")

icons = root / "assets" / "icons"
files = {
    "x": "x.svg",
    "bluesky": "bluesky.svg",
    "instagram": "instagram.svg",
    "threads": "threads.svg",
    "reddit": "reddit.svg",
    "twitch": "twitch.svg",
    "itch": "itchdotio.svg",
    "github": "github.svg",
    "npm": "npm.svg",
    "discord": "discord.svg",
    "paypal": "paypal.svg",
}

def path_data(svg: str) -> str:
    match = re.search(r'<path[^>]*\sd="([^"]+)"', svg)
    return match.group(1) if match else ""

pattern = re.compile(r'(data-brand="([a-z]+)"[^>]*>\s*)<span class="tile" aria-hidden="true"></span>')

def repl(match):
    prefix, brand = match.group(1), match.group(2)
    svg_file = files.get(brand)
    if not svg_file:
        return match.group(0)
    d = path_data((icons / svg_file).read_text(encoding="utf-8"))
    svg = '<span class="tile" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="' + d + '"/></svg></span>'
    return prefix + svg

new_html, count = pattern.subn(repl, html)
html_path.write_text(new_html, encoding="utf-8")
print("replaced", count)
