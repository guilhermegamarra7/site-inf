# 🎓 INF.UFRGS — Landing Page Ciência da Computação

Tecnologias: HTML5, CSS3, Vanilla JS

> **Demonstração ao vivo:** [Acessar a Landing Page](https://guilhermegamarra7.github.io/site-inf/)

> Uma landing page temática e interativa criada para apresentar o curso de Ciência da Computação do Instituto de Informática da UFRGS, com foco na matriz curricular do novo currículo de 2026.

## Sobre o Projeto

Este projeto tem como objetivo proporcionar uma experiência imersiva e visualmente atraente para quem deseja conhecer a estrutura do curso. A página foi estruturada integralmente com tecnologias front-end nativas (sem dependência de frameworks externos), unindo design responsivo a mecânicas interativas que remetem ao ambiente real de desenvolvimento e programação.

## Funcionalidades

* **🖥️ IDE Interativa (Gamificação)**
    * Simula um editor de código real contendo um *snippet* em C++.
    * O botão **"Run Code"** dispara uma animação de compilação no terminal integrado.
    * **Desbloqueio de Conteúdo:** Após a execução bem-sucedida, o restante do conteúdo da página é revelado.
    * **Persistência de Estado:** Utiliza `localStorage` para salvar o progresso. Ao recarregar a página, o conteúdo permanece acessível.
    * **Interface Fluida:** A janela da IDE é arrastável (*drag & drop*) em computadores e possui suporte nativo a toque em dispositivos móveis.

* **🌓 Tema Claro / Escuro**
    * Alternância suave entre *Light Mode* e *Dark Mode* através de um controle na barra de navegação, integrado com variáveis CSS.

* **📚 Grade Curricular Interativa**
    * Organização clara das disciplinas por Etapas (1 a 9).
    * Visualização em formato de acordeões expansíveis para otimizar o espaço em tela.
    * Controles rápidos com botões para "Expandir Todos" e "Recolher Todos" os semestres.

* **🔗 Mapeamento de Dependências**
    * Sistema visual inteligente: ao clicar em qualquer disciplina, a interface destaca automaticamente:
        * 🟣 **Pré-requisitos:** O que é necessário cursar antes.
        * 🟢 **Desbloqueios:** Quais portas se abrem para os semestres seguintes.

* **🗺️ Trilhas de Carreira (Roadmaps)**
    * Apresentação de quatro trilhas temáticas que filtram e destacam as cadeiras mais relevantes para áreas específicas de atuação na tecnologia.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Semântica e estruturação limpa.
* **CSS3:** Variáveis nativas para temas, animações fluidas, Flexbox/Grid e design totalmente responsivo (Mobile First).
* **JavaScript (Vanilla JS):** Lógica interativa de manipulação do DOM, controle de dependências, mecânica de arrastar/soltar e sem frameworks de terceiros.
* **Web Storage API:** Uso de `localStorage` para gerenciar a persistência de dados no navegador.

## 📂 Estrutura de Arquivos

A organização do repositório segue uma arquitetura direta e de fácil manutenção:

```text
📦 site-inf
 ┣ 📜 index.html   # Estrutura principal, marcação e conteúdo
 ┣ 📜 style.css    # Estilização global, temas (dark/light) e animações
 ┗ 📜 script.js    # Lógica da IDE, dependências da grade curricular e interatividade
