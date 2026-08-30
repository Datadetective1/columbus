"""
Procedural material textures for the WAZA visual system.

Everything here is generated, not sourced — see docs/image-sources.md. The point of
these is weight: the SVG artwork is line, and line alone reads as clip-art. A paper
fibre under it makes the whole thing read as something printed.

Run:  .venv/bin/python scripts/make-textures.py
"""
import math, random
from PIL import Image, ImageDraw, ImageFilter

random.seed(1492)  # cb1492 — the only nod to the old domain that survives
OUT = "public/images/textures"


def paper_grain(size=512, strength=9):
    """Tileable warm paper fibre. Alpha-only so it can tint any ground."""
    img = Image.new("L", (size, size), 128)
    px = img.load()
    for y in range(size):
        for x in range(size):
            px[x, y] = 128 + int(random.gauss(0, strength))
    img = img.filter(ImageFilter.GaussianBlur(0.4))

    # Directional fibre: faint horizontal streaks, like laid paper.
    fib = Image.new("L", (size, size), 128)
    d = ImageDraw.Draw(fib)
    for _ in range(size * 3):
        y = random.randrange(size)
        x0 = random.randrange(size)
        ln = random.randrange(8, 70)
        v = 128 + random.randint(-14, 14)
        d.line([(x0, y), (x0 + ln, y)], fill=v)
    fib = fib.filter(ImageFilter.GaussianBlur(0.7))

    out = Image.blend(img, fib, 0.45)
    rgba = Image.new("RGBA", (size, size))
    op = out.load()
    rp = rgba.load()
    for y in range(size):
        for x in range(size):
            v = op[x, y]
            # Deviation from mid becomes alpha; sign becomes light or dark ink.
            dv = v - 128
            a = min(255, int(abs(dv) * 2.6))
            tone = 22 if dv < 0 else 255
            rp[x, y] = (tone, tone - 4 if dv < 0 else tone, tone - 10 if dv < 0 else tone, a)
    return rgba


def hatch(size=512, spacing=7, angle=-45, width=1, alpha=26):
    """Engineering hatch — the fill weight used on section cuts."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    rad = math.radians(angle)
    dx, dy = math.cos(rad), math.sin(rad)
    diag = int(size * 1.6)
    for i in range(-diag, diag, spacing):
        x0 = i - dy * diag
        y0 = -dx * diag + i * 0
        d.line(
            [(i - dx * diag, -dy * diag + i * 0 - diag), (i + dx * diag, dy * diag + diag)],
            fill=(22, 20, 15, alpha),
            width=width,
        )
    return img


def plate_edge(w=1400, h=900):
    """The soft ink falloff at the edge of a printing plate."""
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = img.load()
    for y in range(h):
        for x in range(w):
            ex = min(x, w - x) / (w * 0.5)
            ey = min(y, h - y) / (h * 0.5)
            e = min(ex, ey)
            a = int(max(0, (1 - e) ** 3) * 46)
            if a:
                px[x, y] = (22, 20, 15, a)
    return img.filter(ImageFilter.GaussianBlur(6))


if __name__ == "__main__":
    import os
    os.makedirs(OUT, exist_ok=True)
    paper_grain().save(f"{OUT}/paper-grain.png")
    hatch().save(f"{OUT}/hatch.png")
    plate_edge().save(f"{OUT}/plate-edge.png")
    print("textures written to", OUT)
