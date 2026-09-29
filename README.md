# +Ciência nas Escolas

Site institucional do projeto **+Ciência nas Escolas**, desenvolvido para apresentar as escolas participantes, os equipamentos dos laboratórios maker e os materiais de capacitação.

## O que o site oferece

- Página inicial com apresentação do projeto e escolas participantes.
- Perfil de cada escola, com atividades carregadas pelo Prismic e mapa de localização.
- Catálogo de equipamentos disponíveis nos laboratórios.
- Acesso ao conteúdo de treinamento no Google Classroom.
- Layout responsivo para computadores, tablets e celulares.

## Como executar

O projeto não possui etapa de build. Para uma visualização rápida, abra `index.html` no navegador.

Para testar o comportamento completo, principalmente os módulos JavaScript das páginas de escolas, prefira um servidor local:

### VS Code

1. Instale a extensão **Live Server**.
2. Abra `index.html` no Explorer.
3. Clique com o botão direito e escolha **Open with Live Server**.

### Servidor local alternativo

Com Python instalado, execute na pasta do projeto:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

```text
.
├── index.html              # Página inicial
├── loading.html            # Tela de transição entre páginas
├── HTML/                   # Páginas internas
├── CSS/                   # Estilos globais e específicos
├── JS/                    # Scripts da interface e integração com Prismic
└── img/                   # Logos, fotos e imagens dos equipamentos
```

## Conteúdo das escolas

As páginas de escolas utilizam a API do Prismic por meio de módulos em `JS/prismic/`. Para atualizar as atividades, edite o conteúdo nos repositórios correspondentes do Prismic. É necessário ter conexão com a internet para carregar esses dados.

## Manutenção

- Preserve os caminhos relativos ao mover páginas dentro de `HTML/`.
- Use imagens com `alt` descritivo.
- Teste a home em pelo menos 390px e 1440px de largura antes de publicar.
- Mantenha os estilos compartilhados em `CSS/style.css` e `CSS/navAndFooter.css`; use folhas específicas apenas para diferenças reais.
- Evite adicionar dependências quando a funcionalidade puder ser resolvida com HTML, CSS e JavaScript nativos.

## Tecnologias

HTML5, CSS3, JavaScript ES Modules, Font Awesome e Prismic API.
