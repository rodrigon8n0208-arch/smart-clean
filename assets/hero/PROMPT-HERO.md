# Imagem do Hero — prompt

A imagem fica como **fundo inteiro** do topo do site. O texto fica por cima, do lado **esquerdo**, sobre um degradê azul-escuro.
Por isso, o sofá e os detalhes importantes têm que ficar **do centro para a direita**, deixando o lado esquerdo mais "calmo".

## Especificações

| Item | Valor |
|---|---|
| Formato | Paisagem **16:9** |
| Tamanho mínimo | **1920 × 1080** (ideal 2560 × 1440) |
| Arquivo | JPG ou PNG, qualquer nome. Salve nesta pasta (`assets/hero/`) e me avise |
| Opcional | Uma versão vertical **9:16** (1080 × 1920) para celular, com o sofá no terço de baixo |

---

## Prompt principal (16:9, desktop)

```
Photorealistic interior photograph of a bright, modern Brazilian living room in a coastal apartment in Maceió. A spotless light-beige fabric three-seat sofa with soft cushions sits on the right half of the frame, looking freshly cleaned: crisp texture, uniform color, no stains. Subtle tiny water droplets beading on one seat cushion, showing a waterproof protected fabric. Soft morning sunlight coming through a large window with sheer white curtains, gentle turquoise and aqua accents in the decor (a throw pillow, a vase with green tropical plant leaves), light wood floor, white walls. Calm, fresh, clean, airy atmosphere. Left side of the image is uncluttered with soft out-of-focus wall and window light, leaving negative space for text. Shot on a full-frame camera, 35mm lens, f/2.8, eye-level, shallow depth of field, natural color grading, high dynamic range, ultra detailed, 8k. No people, no text, no logos, no watermark.
```

**Negative prompt** (se a ferramenta tiver esse campo):
```
text, letters, logo, watermark, people, hands, pets, clutter, stains, dirt, dark room, harsh shadows, cartoon, illustration, 3d render, oversaturated, distorted furniture, extra legs, warped cushions
```

## Prompt da versão celular (9:16, opcional)

```
Photorealistic vertical interior photograph of a bright modern living room in a coastal Brazilian apartment. A spotless light-beige fabric sofa placed in the lower third of the frame, freshly cleaned with crisp uniform texture, a few tiny water droplets beading on a cushion showing waterproof protection. Soft morning sunlight through sheer white curtains, turquoise and aqua decor accents, green tropical plant, white walls. Upper two-thirds of the image is calm and uncluttered (soft wall and window light) to leave room for text. 35mm lens, f/2.8, natural colors, ultra detailed. No people, no text, no logos, no watermark.
```

---

## Dicas por ferramenta

- **Midjourney:** cole o prompt e acrescente `--ar 16:9 --style raw --v 7` (celular: `--ar 9:16`).
- **ChatGPT / DALL·E:** peça "formato paisagem 16:9" no começo da mensagem.
- **Ideogram / Leonardo / Flux:** escolha a proporção 16:9 e use o negative prompt.
- Gere 3 ou 4 variações e escolha a que tiver **o lado esquerdo mais limpo** e o sofá mais nítido.
- Se o sofá ficar torto ou com pés a mais, gere de novo: isso fica bem visível no topo do site.

## Variações de estilo (se quiser testar)

- **Mais "azul Smart Clean":** troque `light-beige fabric sofa` por `light-gray fabric sofa` e `turquoise and aqua accents` por `navy blue and aqua accents`.
- **Fim de tarde:** troque `Soft morning sunlight` por `Warm golden-hour sunlight with a glimpse of the sea through the window`.
