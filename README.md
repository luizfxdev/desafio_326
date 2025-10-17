Perfeito 🎶
Abaixo está uma versão aprimorada e formatada do **README** para o repositório [`desafio_326`](https://github.com/luizfxdev/desafio_326).
O texto foi otimizado para GitHub (com emojis, badges e seções claras), e inclui menção aos desafios enfrentados, à ambientação artística (DJ Sona e REMIX RUMBLE), e à estrutura técnica do projeto.

---

````markdown
# 🎧 Desafio 326 — A Melodia Perdida do Universo (DJ Sona Edition)

![GitHub repo size](https://img.shields.io/github/repo-size/luizfxdev/desafio_326?color=00ffd5&label=Tamanho%20do%20Repositório)
![GitHub last commit](https://img.shields.io/github/last-commit/luizfxdev/desafio_326?color=ff69b4&label=Último%20Commit)
![GitHub language count](https://img.shields.io/github/languages/count/luizfxdev/desafio_326?color=48ff00&label=Linguagens)
![GitHub top language](https://img.shields.io/github/languages/top/luizfxdev/desafio_326?color=00ffd5&label=Linguagem%20Principal)
![GitHub stars](https://img.shields.io/github/stars/luizfxdev/desafio_326?style=social)

---

## 🌌 Contexto do Desafio

**A Melodia Perdida do Universo — Edição DJ Sona** é um desafio temático ambientado no universo de **League of Legends**.  
A lendária **DJ Sona**, guardiã das vibrações cósmicas, teve suas melodias corrompidas por um bug digital.  
Sua missão como programador é decifrar e restaurar a sequência original das notas musicais, garantindo que o ritmo do cosmos continue em perfeita harmonia. 🎶

---

## 🎮 Enredo do Desafio

> No universo pulsante de League of Legends, DJ Sona é a guardiã das vibrações cósmicas que mantêm o ritmo do mundo.  
> Porém, um bug embaralhou as notas da sua grandiosa mixagem!  
> Sua tarefa é reconstruir a melodia — cada letra foi deslocada no alfabeto por um valor secreto.  
> Restaure o remix e mantenha o baile intergaláctico vivo! 🌠

### 🧩 Entrada
- Um **array de strings**, onde cada string representa uma nota embaralhada.  
- Um **número inteiro** representando o código de deslocamento.

### 🔓 Saída Esperada
- Uma **string única** com a melodia decifrada.

#### Exemplo:
```js
Entrada: ["ifmmp", "xpsme"], código: 1
Saída: "hello world"
````

---

## 🧠 Dificuldades e Aprendizados

Durante o desenvolvimento, enfrentei desafios como:

* 🧩 **Erros lógicos no algoritmo** de descriptografia, exigindo ajustes no cálculo de *charCodeAt()* e nos limites do alfabeto.
* 🎨 **Conflitos de estilo e z-index** entre o vídeo de fundo e os componentes da interface, que precisaram de um refinado controle de camadas e responsividade.
* 🔊 **Sincronização de áudio e elementos visuais**, garantindo uma experiência imersiva sem travamentos.

Esses obstáculos contribuíram para o aprimoramento das habilidades em **debugging**, **animação CSS avançada** e **estruturação modular de scripts.**

---

## 🎵 Inspiração Artística

* **Background animado:** splash art da skin *DJ Sona*, de *League of Legends*
* **Tema musical:** 🎶 *REMIX RUMBLE ft. Steve Aoki* — tema principal do modo *TFT (Teamfight Tactics)*

Essa ambientação foi escolhida para transmitir o espírito eletrônico e cósmico da personagem.

---

## 🧩 Estrutura do Projeto

```
desafio_326/
│
├── assets/
│   ├── background.mp4       # Splash art animada de DJ Sona
│   ├── theme.mp3            # Tema musical - REMIX RUMBLE ft. Steve Aoki
│   └── favicon.ico          # Ícone do projeto
│
├── index.html               # Estrutura da interface principal
├── styles.css               # Estilização e animações do tema
└── script.js                # Lógica de descriptografia e interação
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                      | Finalidade                                      |
| ------------------------------- | ----------------------------------------------- |
| ⚙️ **JavaScript (ES6+)**        | Implementação do algoritmo de decodificação     |
| 🎨 **HTML5**                    | Estruturação semântica da aplicação             |
| 💅 **CSS3**                     | Efeitos visuais, transições e layout responsivo |
| 🪩 **League of Legends Assets** | Elementos visuais e trilha sonora               |

---

## 🚀 Funcionalidades

* Interface interativa com entrada de dados criptografados
* Botões animados com *glow effect*
* Decodificação detalhada, exibindo cada passo da transformação
* Controles de áudio integrados
* Layout responsivo e imersivo com vídeo de fundo

---

## 🧮 Lógica de Descriptografia

```js
function decryptWord(word, shift) {
  let decrypted = '';
  for (let char of word) {
    if (char >= 'a' && char <= 'z') {
      let code = char.charCodeAt(0) - shift;
      while (code < 97) code += 26;
      decrypted += String.fromCharCode(code);
    } else decrypted += char;
  }
  return decrypted;
}
```

O algoritmo aplica um **shift reverso** no alfabeto, restaurando letra por letra da melodia original.

---

## 🧱 Como Executar

```bash
# Clone o repositório
git clone https://github.com/luizfxdev/desafio_326.git

# Acesse a pasta
cd desafio_326

# Abra o arquivo principal no navegador
start index.html
```

---

## 🤝 Contribuições

Sinta-se livre para contribuir com melhorias no design, lógica ou experiência sonora:

```bash
git checkout -b feature/nova-feature
git commit -m "Adiciona nova melhoria"
git push origin feature/nova-feature
```

Abra um **Pull Request** com sua proposta! 🚀

---

## 🪐 Licença

Distribuído sob a **Licença MIT**.
Sinta-se livre para estudar, modificar e remixar!

---

## 👨‍💻 Desenvolvedor

**Luiz Felipe Santos de Oliveira**
🔗 [GitHub – @luizfxdev](https://github.com/luizfxdev)
📋 [Linkedin](https://www.linkedin.com/in/luizfxdev)

> “O código é a batida. A lógica é o ritmo.
> E a harmonia… é o universo recomposto por DJ Sona.” 🎧

```
```
---

*"Abram as cortinas. Estou pronto."*
