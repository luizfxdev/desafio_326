// Elementos do DOM
const encryptedInput = document.getElementById('encrypted-notes');
const shiftInput = document.getElementById('shift-code');
const decryptBtn = document.getElementById('decrypt-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função para decifrar uma única palavra
function decryptWord(word, shift) {
  let decrypted = '';
  const steps = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const originalCode = char.charCodeAt(0);

    // Verifica se é uma letra
    if (char >= 'a' && char <= 'z') {
      // Letra minúscula
      let newCode = originalCode - shift;

      // Ajusta se passar do 'a'
      while (newCode < 97) {
        newCode += 26;
      }

      const newChar = String.fromCharCode(newCode);
      decrypted += newChar;

      steps.push({
        original: char,
        originalCode: originalCode,
        shift: shift,
        newCode: newCode,
        result: newChar
      });
    } else if (char >= 'A' && char <= 'Z') {
      // Letra maiúscula
      let newCode = originalCode - shift;

      // Ajusta se passar do 'A'
      while (newCode < 65) {
        newCode += 26;
      }

      const newChar = String.fromCharCode(newCode);
      decrypted += newChar;

      steps.push({
        original: char,
        originalCode: originalCode,
        shift: shift,
        newCode: newCode,
        result: newChar
      });
    } else {
      // Não é letra, mantém o caractere
      decrypted += char;
    }
  }

  return { decrypted, steps };
}

// Função para decifrar o array completo
function decryptArray(encryptedArray, shift) {
  const results = [];
  const allSteps = [];

  for (let i = 0; i < encryptedArray.length; i++) {
    const word = encryptedArray[i];
    const { decrypted, steps } = decryptWord(word, shift);
    results.push(decrypted);
    allSteps.push({ word: word, decrypted: decrypted, steps: steps });
  }

  return { results, allSteps };
}

// Função para exibir o resultado detalhado
function displayResult(originalArray, shift, decryptedArray, allSteps) {
  let html = '<div class="calculation-details">';

  // Informações iniciais
  html += `<div class="calculation-step">
        <strong>🎵 Entrada:</strong> ${originalArray.join(', ')}<br>
        <strong>🔢 Código de Embaralhamento:</strong> ${shift}
    </div>`;

  // Detalhamento de cada palavra
  html += '<div class="calculation-step"><strong>📝 Processo de Decodificação:</strong></div>';

  allSteps.forEach((item, index) => {
    html += `<div class="calculation-step">
            <strong>Palavra ${index + 1}: "${item.word}"</strong><br>`;

    item.steps.forEach(step => {
      html += `'${step.original}' (código ${step.originalCode}) - ${step.shift} = ${step.newCode} → '${step.result}'<br>`;
    });

    html += `<strong>Resultado:</strong> "${item.decrypted}"`;
    html += '</div>';
  });

  // Resultado final
  const finalOutput = decryptedArray.join(' ');
  html += `<div class="final-output">
        ✨ Melodia Restaurada: "${finalOutput}"
    </div>`;

  html += '</div>';

  resultContent.innerHTML = html;
  resultSection.style.display = 'block';
}

// Função para processar a decodificação
function processDecryption() {
  try {
    // Obtém e valida os valores de entrada
    const encryptedValue = encryptedInput.value.trim();
    const shiftValue = parseInt(shiftInput.value);

    if (!encryptedValue) {
      alert('Por favor, insira as notas embaralhadas!');
      return;
    }

    if (isNaN(shiftValue)) {
      alert('Por favor, insira um código de embaralhamento válido!');
      return;
    }

    // Processa a entrada como palavras separadas por vírgula
    const encryptedArray = encryptedValue
      .split(',')
      .map(word => word.trim())
      .filter(word => word.length > 0);

    if (encryptedArray.length === 0) {
      alert('Por favor, insira pelo menos uma palavra!');
      return;
    }

    // Processa a decodificação
    const { results, allSteps } = decryptArray(encryptedArray, shiftValue);

    // Exibe o resultado
    displayResult(encryptedArray, shiftValue, results, allSteps);
  } catch (error) {
    alert('Erro ao processar a decodificação: ' + error.message);
    console.error(error);
  }
}

// Função para limpar e retornar ao estado inicial
function resetForm() {
  encryptedInput.value = '';
  shiftInput.value = '';
  resultContent.innerHTML = '';
  resultSection.style.display = 'none';
}

// Event listeners dos botões
decryptBtn.addEventListener('click', processDecryption);
returnBtn.addEventListener('click', resetForm);

// Permite pressionar Enter para decifrar
encryptedInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processDecryption();
  }
});

shiftInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processDecryption();
  }
});

// Inicializa com resultado oculto
resultSection.style.display = 'none';
