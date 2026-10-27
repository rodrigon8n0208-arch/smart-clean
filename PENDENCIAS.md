# Pendências — conteúdo para confirmar com o cliente

Todos os itens abaixo aparecem no site entre colchetes `[ ]`. Procure pelo texto no `index.html` para editar.

## Textos para confirmar
- [ ] **[CONFIRMAR SERVIÇOS]**: a lista de serviços está correta? (sofá, impermeabilização, poltronas/cadeiras, colchões, tapetes, bancos de carro)
- [ ] **[CONFIRMAR BAIRROS]**: bairros atendidos (hoje: Pinheiro, Farol, Ponta Verde, Jatiúca, Pajuçara, Gruta de Lourdes, Mangabeiras, Cruz das Almas, Serraria, Antares)
- [ ] **[CONFIRMAR HORÁRIO]**: horário de atendimento (rodapé)
- [ ] **[CONFIRMAR TEMPO MÉDIO DE SECAGEM]** (FAQ)
- [ ] **[CONFIRMAR DURAÇÃO MÉDIA]** da impermeabilização (FAQ)
- [ ] **[CONFIRMAR]** se os produtos são seguros para crianças e pets (FAQ)
- [ ] **[CONFIRMAR FORMAS DE PAGAMENTO]** (FAQ)

## Depoimentos
- [ ] **[DEPOIMENTO REAL AQUI]**: hoje o site mostra só o print de feedback do WhatsApp publicado no Instagram. Se quiser, copie 2 ou 3 avaliações do Google e adicione na seção "Depoimentos".
- [ ] Confirmar se o cliente autoriza mostrar esse print de conversa no site.

## Fotos
As fotos atuais foram tiradas do Instagram @smartcleaan (resolução máxima de 640px).
- [ ] **Fotos em alta resolução**: pedir os originais ao cliente, principalmente:
  - ~~Imagem do hero~~ ✔ gerada (original em `assets/hero/`, versões otimizadas `public/images/hero.webp` e `hero-mobile.webp`)
  - `public/images/antes-depois-1.webp`, `-2`, `-3`
  - `public/images/og-image.jpg` (1200×630, aparece ao compartilhar o link no WhatsApp/Facebook)
- [ ] **Mais antes e depois**: se houver, adicionar novos `<figure class="ba__item">` na seção "Antes e Depois".
- [ ] **Logo oficial**: o site usa um redesenho vetorial fiel da logo do Instagram (`public/logo-smart-clean.svg`; o original está em `assets/logo/`). Se o cliente tiver o arquivo original em alta (AI, PDF, SVG ou PNG), substituir.

Para trocar uma foto, basta substituir o arquivo em `public/images/` mantendo o mesmo nome (de preferência em WebP).

## Técnico
- [ ] **[DOMÍNIO]**: quando o domínio for definido, atualizar:
  - `index.html`: descomentar o `<link rel="canonical">` e trocar os caminhos de `og:image`/`twitter:image` por URLs completas (`https://dominio/images/og-image.jpg`)
  - `public/sitemap.xml` e `public/robots.txt`
- [ ] Cadastrar o site no Google Search Console e enviar o sitemap.
- [ ] Colocar o link do site no perfil do Google Meu Negócio e na bio do Instagram.
- [ ] (Opcional) Incluir `aggregateRating` no JSON-LD somente com nota e número de avaliações reais do Google.
