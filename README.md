# Smart Clean — site institucional

Site de uma página da Smart Clean (limpeza e impermeabilização de sofá em Maceió/AL).
Feito com Vite, HTML, CSS e JavaScript puro, com GSAP para as animações de entrada.

## Rodar localmente

Precisa do Node.js 18 ou mais recente.

```bash
npm install
npm run dev       # abre em http://localhost:5173
```

## Gerar a versão final

```bash
npm run build     # gera a pasta /dist
npm run preview   # testa a versão final localmente
```

## Publicar na Vercel

**Opção 1: pelo GitHub (recomendado)**
1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Vite sozinha (build: `npm run build`, saída: `dist`). Clique em **Deploy**.

**Opção 2: pela linha de comando**
```bash
npm i -g vercel
vercel          # cria uma prévia
vercel --prod   # publica em produção
```

Depois, adicione o domínio em **Project → Settings → Domains** e siga o [PENDENCIAS.md](PENDENCIAS.md) para atualizar o sitemap e as tags de compartilhamento.

## Estrutura

```
index.html              página inteira (HTML semântico, SEO e JSON-LD)
src/styles/
  variables.css         cores, fontes e medidas
  base.css              estilos gerais, botões, cards
  sections.css          estilos de cada seção
src/js/main.js          menu, header, links do WhatsApp e animações
public/images/          fotos (WebP), tiradas do Instagram @smartcleaan
public/sitemap.xml, public/robots.txt, public/favicon.svg
PENDENCIAS.md           o que falta confirmar com o cliente
```

## Como editar

- **Textos**: direto no `index.html`.
- **Fotos**: substitua o arquivo em `public/images/` mantendo o nome.
- **Cores**: em `src/styles/variables.css`.
- **Botões "Quero esse"**: a mensagem do WhatsApp usa o atributo `data-servico` de cada botão.

## Acessibilidade e desempenho

- O conteúdo aparece mesmo se o JavaScript falhar; as animações só escondem os elementos quando o JS está ativo.
- Com "reduzir movimento" ligado no sistema, as animações são desativadas.
- O FAQ usa `<details>` nativo, que funciona com teclado e leitores de tela.
- Imagens com `loading="lazy"`, largura/altura definidas e texto alternativo.
