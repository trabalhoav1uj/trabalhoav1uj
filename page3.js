const lista = document.getElementById("aritimetica-list");

const conteudos = {
    "1ano-botao": [
        "Contagem",
        "Adição e subtração",
        "Formas geométricas",
        "Noções de tempo"
    ],
    "2ano-botao": [
        "Números até 100",
        "Adição e subtração",
        "Problemas simples",
        "Medidas básicas"
    ],
    "3ano-botao": [
        "Multiplicação",
        "Divisão",
        "Frações simples",
        "Geometria básica"
    ],
    "4ano-botao": [
        "Multiplicação avançada",
        "Divisão",
        "Frações",
        "Medidas"
    ],
    "5ano-botao": [
        "Números decimais",
        "Frações",
        "Área e perímetro",
        "Problemas"
    ],
    "6ano-botao": [
        "Números inteiros",
        "Frações",
        "Razão e proporção",
        "Geometria"
    ],
    "7ano-botao": [
        "Porcentagem",
        "Equações simples",
        "Expressões algébricas",
        "Geometria"
    ],
    "8ano-botao": [
        "Equações do 1º grau",
        "Sistemas",
        "Potência e raiz",
        "Triângulos"
    ],
    "9ano-botao": [
        "Equação do 2º grau",
        "Funções",
        "Polinômios",
        "Probabilidade"
    ],
    "1ano-em-botao": [
        "Função do 1º grau",
        "Função do 2º grau",
        "PA e PG",
        "Trigonometria básica"
    ],
    "2ano-em-botao": [
        "Trigonometria",
        "Logaritmos",
        "Geometria espacial",
        "Análise combinatória"
    ],
    "3ano-em-botao": [
        "Probabilidade",
        "Estatística",
        "Funções avançadas",
        "Revisão ENEM"
    ]
};

// adiciona evento em TODOS os botões
Object.keys(conteudos).forEach(id => {
    const botao = document.getElementById(id);

    botao.addEventListener("click", function () {
        const itens = conteudos[id];

        lista.innerHTML = `
            <ul class="botao">
                ${itens.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    });
});