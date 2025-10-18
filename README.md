
# 🎧 Desafio 326 — A Melodia Perdida do Universo (DJ Sona Edition)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge">
  <img src="https://img.shields.io/badge/League%20of%20Legends-D32936?style=for-the-badge&logo=leagueoflegends&logoColor=white" alt="League of Legends Badge">
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/luizfxdev/desafio_326?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/status-completed-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="Version">
</p>

---

## 📋 Índice

- [🌌 Sobre o Desafio](#-sobre-o-desafio)
- [🎮 Enredo](#-enredo)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [💡 Exemplos de Uso](#-exemplos-de-uso)
- [🧮 Algoritmo](#-algoritmo)
- [🎨 Design e UX](#-design-e-ux)
- [🧠 Desafios Técnicos](#-desafios-técnicos)
- [🤝 Contribuindo](#-contribuindo)
- [⚖️ Licença e Avisos](#️-licença-e-avisos)
- [👨‍💻 Autor](#-autor)

---

## 🌌 Sobre o Desafio

**A Melodia Perdida do Universo** é um desafio de programação temático ambientado no universo de **League of Legends**, onde você auxilia a lendária **DJ Sona** a restaurar suas melodias cósmicas corrompidas por um bug digital.

### 🎯 Objetivo

Implementar um **decodificador de cifra de César** que restaure sequências de notas musicais embaralhadas, aplicando conceitos de:

- Manipulação de strings e arrays
- Algoritmos de criptografia básica
- Operações com códigos ASCII
- Desenvolvimento de interfaces interativas

---

## 🎮 Enredo

> *No universo pulsante de League of Legends, DJ Sona é a guardiã das vibrações cósmicas que mantêm o ritmo do mundo em perfeita harmonia. Mas um bug digital embaralhou as notas da sua grandiosa mixagem, ameaçando romper o equilíbrio das pistas intergalácticas!* 🌌
> 
> *Sua missão como programador é restaurar a sequência correta. Cada letra foi deslocada no alfabeto por um valor secreto. Só um verdadeiro hacker musical pode decifrar e remontar a melodia original!*

### 🧩 Especificação Técnica

**Entrada:**
- Um conjunto de palavras separadas por vírgula (notas embaralhadas)
- Um número inteiro representando o código de deslocamento

**Saída:**
- A melodia decifrada, mostrando o processo completo de decodificação

**Exemplo:**
```
Entrada: ifmmp, xpsme
Código: 1
Saída: hello world
```

---

## ✨ Funcionalidades

### 🎛️ Interface Interativa
- ✅ Campo de entrada para notas embaralhadas (formato simples: palavra1, palavra2)
- ✅ Campo numérico para código de deslocamento
- ✅ Botões animados com efeito glow arco-íris
- ✅ Validação de entrada em tempo real

### 📊 Visualização de Resultados
- ✅ Exibição detalhada do processo de decodificação
- ✅ Conversão letra por letra com códigos ASCII
- ✅ Resultado final destacado com estilo especial
- ✅ Scroll automático para resultados extensos

### 🎵 Experiência Imersiva
- ✅ Vídeo de fundo em tela cheia (splash art DJ Sona)
- ✅ Trilha sonora temática (REMIX RUMBLE ft. Steve Aoki)
- ✅ Controles de áudio integrados (play/pause)
- ✅ Design futurista com cores neon

### 📱 Responsividade
- ✅ Layout adaptável para desktop, tablet e mobile
- ✅ Botões reorganizados verticalmente em telas pequenas
- ✅ Container fluido com largura proporcional
- ✅ Sem scroll horizontal

---

## 🛠️ Tecnologias

<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>HTML5, CSS3, JavaScript (ES6+)</td>
  </tr>
  <tr>
    <td><b>Estilização</b></td>
    <td>CSS Grid, Flexbox, Animações CSS, Glassmorphism</td>
  </tr>
  <tr>
    <td><b>Recursos</b></td>
    <td>Web Audio API, HTML5 Video, Custom Scrollbars</td>
  </tr>
  <tr>
    <td><b>Design</b></td>
    <td>Responsive Design, Mobile-First, Accessibility</td>
  </tr>
  <tr>
    <td><b>Assets</b></td>
    <td>League of Legends (DJ Sona) - Riot Games</td>
  </tr>
</table>

---

## 📁 Estrutura do Projeto

```
desafio_326/
│
├── assets/
│   ├── background.mp4       # Vídeo de fundo (3840x2160) - Splash art DJ Sona
│   ├── theme.mp3            # Trilha sonora - REMIX RUMBLE ft. Steve Aoki
│   └── favicon.ico          # Ícone da aplicação
│
├── index.html               # Estrutura HTML principal
├── styles.css               # Estilos, animações e responsividade
├── script.js                # Lógica de decodificação e interatividade
└── README.md                # Documentação do projeto
```

---

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Arquivos de mídia na pasta `assets/`

### Instalação

```bash
# Clone o repositório
git clone https://github.com/luizfxdev/desafio_326.git

# Acesse o diretório
cd desafio_326

# Abra o arquivo no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# Acesse: http://localhost:8000
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Mensagem Simples
```
Entrada: ifmmp, xpsme
Código: 1
Saída: hello world
```

### Exemplo 2: Username
```
Entrada: mvjagyelw
Código: 1
Saída: luizfxdev
```

### Exemplo 3: Tecnologia
```
Entrada: gvmmtubdl
Código: 1
Saída: fullstack
```

### Exemplo 4: Linguagem
```
Entrada: mdzdvfulsw
Código: 3
Saída: javascript
```

### Exemplo 5: Jogo
```
Entrada: ofdjxhriohhjqgv
Código: 3
Saída: leagueoflegends
```

---

## 🧮 Algoritmo

### Lógica de Decodificação

A aplicação utiliza uma **cifra de César reversa**, onde cada letra é deslocada **para trás** no alfabeto:

```javascript
function decryptWord(word, shift) {
    let decrypted = '';
    const steps = [];
    
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const originalCode = char.charCodeAt(0);
        
        // Verifica se é letra minúscula
        if (char >= 'a' && char <= 'z') {
            let newCode = originalCode - shift;
            
            // Ajusta se passar do 'a' (wrap around)
            while (newCode < 97) {
                newCode += 26;
            }
            
            const newChar = String.fromCharCode(newCode);
            decrypted += newChar;
            
            // Armazena o passo para visualização
            steps.push({
                original: char,
                originalCode: originalCode,
                shift: shift,
                newCode: newCode,
                result: newChar
            });
        } else {
            // Mantém caracteres não-alfabéticos
            decrypted += char;
        }
    }
    
    return { decrypted, steps };
}
```

### Complexidade
- **Tempo:** O(n × m) - onde n é o número de palavras e m é o tamanho médio
- **Espaço:** O(n × m) - para armazenar resultados e passos

---

## 🎨 Design e UX

### Paleta de Cores
```css
--primary-cyan: #00ffd5
--neon-green: #48ff00
--electric-blue: #002bff
--purple-glow: #7a00ff
--dark-bg: rgba(10, 5, 24, 0.85)
```

### Efeitos Visuais
- **Glassmorphism:** `backdrop-filter: blur(15px)`
- **Neon Glow:** `box-shadow: 0 0 15px rgba(0, 255, 200, 0.4)`
- **Rainbow Border:** Gradiente arco-íris animado nos botões
- **Smooth Transitions:** Animações de 0.3s em todos os elementos interativos

### Acessibilidade
- ✅ Contraste de cores WCAG AA
- ✅ Labels semânticos em inputs
- ✅ Navegação por teclado (Tab, Enter)
- ✅ ARIA labels para tecnologias assistivas

---

## 🧠 Desafios Técnicos

### 🐛 Problemas Enfrentados

#### 1. Algoritmo de Descriptografia
**Desafio:** Erros no cálculo do deslocamento ao passar dos limites do alfabeto.

**Solução:** Implementação de loop `while` para garantir wrap-around correto:
```javascript
while (newCode < 97) {
    newCode += 26;
}
```

#### 2. Vídeo de Fundo
**Desafio:** Background não ocupava toda a tela, ficando minimizado.

**Solução:** Ajuste de propriedades CSS:
```css
#background-video {
    min-width: 100%;
    min-height: 100%;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}
```

#### 3. Camadas e Z-Index
**Desafio:** Conflitos entre vídeo, container e controles de áudio.

**Solução:** Hierarquia clara de z-index:
- Vídeo: `z-index: -1`
- Container: `z-index: 10`
- Controles: `z-index: 1000`

#### 4. Formato de Entrada
**Desafio:** JSON complexo dificulta uso para iniciantes.

**Solução:** Simplificação para entrada por vírgula:
```javascript
const encryptedArray = encryptedValue.split(',')
    .map(word => word.trim())
    .filter(word => word.length > 0);
```

### 📚 Aprendizados

- Manipulação avançada de códigos ASCII
- Técnicas de glassmorphism e design futurista
- Otimização de performance com vídeos pesados
- Boas práticas de UX para aplicações temáticas
- Debugging sistemático de algoritmos

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Siga os passos:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. **Commit** suas mudanças:
   ```bash
   git commit -m "✨ Adiciona: Minha nova feature"
   ```
4. **Push** para a branch:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um **Pull Request**

### 💡 Ideias para Contribuição
- 🎨 Novos temas visuais (outras skins de campeões)
- 🔊 Mais opções de trilha sonora
- 🧮 Algoritmos de criptografia adicionais (ROT13, Atbash)
- 🌐 Internacionalização (i18n)
- ♿ Melhorias de acessibilidade
- 📱 Progressive Web App (PWA)

---

## ⚖️ Licença e Avisos

### 📜 Licença MIT

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

### 🚨 Aviso Legal - Propriedade Intelectual

**IMPORTANTE:** Este é um projeto **EXCLUSIVAMENTE EDUCACIONAL** sem fins lucrativos.

#### 🎮 Direitos Autorais - Riot Games

Todos os assets visuais, musicais e referências a **League of Legends** são propriedade intelectual da **Riot Games, Inc.**

- ✅ **Splash Art de DJ Sona** - © Riot Games
- ✅ **Música REMIX RUMBLE ft. Steve Aoki** - © Riot Games
- ✅ **Marca League of Legends** - © Riot Games

#### 📢 Declaração de Uso

- ✅ Uso exclusivo para fins **educacionais e de demonstração**
- ✅ Sem intenção comercial ou de infringir direitos autorais
- ✅ Projeto desenvolvido por fãs, para fãs e estudantes
- ✅ Não possui vinculação oficial com a Riot Games

#### 🙏 Agradecimentos à Riot Games

Expressamos profunda gratidão à **Riot Games** por criar um universo tão rico e inspirador. A complexidade e criatividade de personagens como **DJ Sona** foram fundamentais para a concepção deste projeto educacional.

> *"Este projeto é uma homenagem à arte e criatividade da Riot Games, desenvolvido com respeito e admiração por seu trabalho."*

---

## 👨‍💻 Autor

<div align="center">

### **Luiz Felipe Santos de Oliveira**

<img src="https://github.com/luizfxdev.png" width="150px" style="border-radius: 50%;" alt="Luiz Felipe"/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/luizfxdev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luizfxdev)

---

### 💬 Citação

> *"O código é a batida. A lógica é o ritmo.*  
> *E a harmonia… é o universo recomposto por DJ Sona."* 🎧

---

### 🎵 Nota Final

***"Uma nota errada é apenas... um pequeno acidente feliz."***  
*— Bob Ross (adaptado)*

</div>

---

<div align="center">

**⭐ Se este projeto te ajudou, considere deixar uma estrela!**

*Feito com 💜 por [Luiz Felipe](https://github.com/luizfxdev)*

</div>
