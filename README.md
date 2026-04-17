# INF.UFRGS — Landing Page Ciência da Computação
Uma landing page temática com estilo personalizado para apresentar o curso de Ciência da Computação da UFRGS (Instituto de Informática), com foco no novo currículo 2026.

**Tecnologias:**
- HTML5
- CSS3 -> variáveis CSS, animações, design responsivo
- JavaScript puro (Vanilla JS) -> sem frameworks ou dependências externas
- localStorage -> para persistência do estado da IDE entre sessões

Funcionalidades:
🖥️ **IDE Interativa**
Simula um editor de código com um snippet em C++
O botão "Run Code" dispara uma animação de compilação no terminal
Após a execução, o restante do conteúdo da página é revelado
O estado é salvo via localStorage: ao recarregar, o conteúdo já aparece desbloqueado
A janela da IDE é arrastável (drag & drop), com suporte a toque em mobile

🌓 **Tema Claro / Escuro**
Alternância entre modo claro e escuro via botão na navbar

📚 **Grade Curricular Interativa**
Disciplinas organizadas por Etapas (1 a 9), exibidas em acordeões expansíveis
Botões para Expandir Todos e Recolher Todos os acordeões

🔗 **Visualização de Dependências**
Clique em qualquer disciplina para destacar:
🟣 Pré-requisitos (o que você precisa antes)
🟢 O que ela desbloqueia (o que você pode cursar depois)

🗺️ ** Trilhas de Carreira (Roadmaps)**
Quatro trilhas temáticas que destacam as disciplinas relevantes para cada área:

Estrutura de Arquivos:
├── index.html   # Estrutura e conteúdo da página
├── style.css    # Estilização (tema , dark/light mode, animações)
└── script.js    # Toda a lógica interativa (IDE, dependências, roadmaps, drag)
