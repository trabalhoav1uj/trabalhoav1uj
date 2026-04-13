const params = new URLSearchParams(window.location.search);
const materia = params.get("materia");

const titulo = document.getElementById("titulo-materia");
const conteudo = document.getElementById("conteudo-materia");

titulo.innerText = materia;

const anos = [
    "1ano", "2ano", "3ano", "4ano", "5ano",
    "6ano", "7ano", "8ano", "9ano",
    "1em", "2em", "3em"
];

const dados = {

"Física": {
    "1ano": ["Luz e sombra", "Som", "Movimento simples", "Dia e noite"],
    "2ano": ["Fontes de luz", "Sons do ambiente", "Força básica", "Movimento"],
    "3ano": ["Empurrar e puxar", "Movimento dos objetos", "Velocidade básica", "Gravidade simples"],
    "4ano": ["Energia", "Máquinas simples", "Calor", "Luz"],
    "5ano": ["Eletricidade básica", "Circuitos simples", "Força e movimento", "Energia"],
    "6ano": ["Grandezas físicas", "Unidades", "Medição", "Velocidade", "Movimento"],
    "7ano": ["Cinemática", "Velocidade média", "Aceleração", "Gráficos", "Referencial"],
    "8ano": ["Força", "Leis de Newton", "Atrito", "Equilíbrio", "Pressão"],
    "9ano": ["Energia", "Trabalho", "Potência", "Calor", "Máquinas"],
    "1em": ["MRU", "MRUV", "Gráficos", "Queda livre", "Vetores"],
    "2em": ["Termologia", "Calorimetria", "Óptica", "Ondas", "Refração"],
    "3em": ["Eletrostática", "Eletrodinâmica", "Magnetismo", "Circuitos", "Revisão ENEM"]
},

"Química": {
    "1ano": ["Materiais", "Objetos", "Misturas simples", "Transformações"],
    "2ano": ["Misturas", "Separação", "Estados físicos", "Mudanças"],
    "3ano": ["Transformações químicas", "Matéria", "Misturas", "Energia"],
    "4ano": ["Estados físicos", "Mudanças", "Propriedades", "Substâncias"],
    "5ano": ["Misturas", "Separação", "Transformações", "Energia"],
    "6ano": ["Matéria", "Estados físicos", "Propriedades", "Mudanças"],
    "7ano": ["Misturas", "Separação", "Soluções", "Substâncias"],
    "8ano": ["Átomo", "Tabela periódica", "Elementos", "Modelos atômicos"],
    "9ano": ["Ligações químicas", "Substâncias", "Reações", "Propriedades"],
    "1em": ["Mol", "Estequiometria", "Reações", "Balanceamento"],
    "2em": ["Orgânica", "Funções orgânicas", "Cadeias", "Reações orgânicas"],
    "3em": ["Equilíbrio", "Eletroquímica", "Cinética", "Revisão ENEM"]
},

"Biologia": {
    "1ano": ["Seres vivos", "Plantas", "Animais", "Natureza"],
    "2ano": ["Habitat", "Alimentação", "Animais", "Plantas"],
    "3ano": ["Corpo humano", "Saúde", "Animais", "Ambiente"],
    "4ano": ["Sistema digestório", "Respiração", "Circulação", "Saúde"],
    "5ano": ["Ecossistemas", "Meio ambiente", "Cadeia alimentar", "Preservação"],
    "6ano": ["Célula", "Organização dos seres", "Microscópio", "Tecidos"],
    "7ano": ["Reinos", "Classificação", "Vírus", "Bactérias"],
    "8ano": ["Corpo humano", "Sistemas", "Hormônios", "Saúde"],
    "9ano": ["Genética", "DNA", "Hereditariedade", "Evolução"],
    "1em": ["Citologia", "Membrana", "Organelas", "Metabolismo"],
    "2em": ["Ecologia", "Ciclos", "População", "Evolução"],
    "3em": ["Genética avançada", "Biotecnologia", "Ecologia", "Revisão ENEM"]
},

"Português": {
    "1ano": ["Alfabeto", "Vogais", "Consoantes", "Sílabas"],
    "2ano": ["Leitura", "Escrita", "Ortografia", "Sílabas"],
    "3ano": ["Frases", "Pontuação", "Texto", "Leitura"],
    "4ano": ["Substantivo", "Adjetivo", "Verbo", "Texto"],
    "5ano": ["Interpretação", "Gramática", "Texto", "Leitura"],
    "6ano": ["Classes", "Substantivo", "Adjetivo", "Verbo"],
    "7ano": ["Verbos", "Advérbios", "Conjunções", "Texto"],
    "8ano": ["Período composto", "Orações", "Conjunções", "Texto"],
    "9ano": ["Sintaxe", "Regência", "Concordância", "Texto"],
    "1em": ["Gramática", "Interpretação", "Texto", "Análise"],
    "2em": ["Figuras de linguagem", "Sintaxe", "Texto", "Análise"],
    "3em": ["Redação ENEM", "Interpretação", "Revisão", "Gramática"]
},

"História": {
    "1ano": ["Família", "Comunidade", "Tempo", "História"],
    "2ano": ["Cultura", "Tradições", "Tempo", "Sociedade"],
    "3ano": ["História local", "Cultura", "Sociedade", "Tempo"],
    "4ano": ["Brasil antigo", "Indígenas", "Colonização", "Cultura"],
    "5ano": ["Colonização", "Escravidão", "Cultura", "História"],
    "6ano": ["Pré-história", "Antiguidade", "Civilizações", "Cultura"],
    "7ano": ["Idade Média", "Feudalismo", "Igreja", "Cruzadas"],
    "8ano": ["Idade Moderna", "Renascimento", "Revoluções", "Colonização"],
    "9ano": ["Idade Contemporânea", "Revoluções", "Guerras", "Industrialização"],
    "1em": ["Brasil Colônia", "Economia", "Sociedade", "Cultura"],
    "2em": ["Império", "Independência", "Política", "Sociedade"],
    "3em": ["República", "Guerras", "Ditadura", "Atualidades"]
},

"Geografia": {
    "1ano": ["Lugar", "Casa", "Bairro", "Paisagem"],
    "2ano": ["Paisagem", "Natureza", "Cidade", "Campo"],
    "3ano": ["Mapas", "Localização", "Ambiente", "Espaço"],
    "4ano": ["Território", "Região", "Clima", "Relevo"],
    "5ano": ["Regiões", "Brasil", "População", "Economia"],
    "6ano": ["Clima", "Relevo", "Vegetação", "Hidrografia"],
    "7ano": ["Vegetação", "Clima", "Recursos", "Natureza"],
    "8ano": ["População", "Urbanização", "Migração", "Cidades"],
    "9ano": ["Globalização", "Economia", "Geopolítica", "Indústria"],
    "1em": ["Geopolítica", "Território", "Economia", "Mundo"],
    "2em": ["Economia mundial", "Indústria", "Agricultura", "Globalização"],
    "3em": ["Brasil atual", "Geopolítica", "Economia", "Revisão"]
}
,
"Literatura": {
    "1ano": ["Contos infantis", "Histórias curtas", "Personagens", "Leitura básica"],
    "2ano": ["Fábulas", "Narrativas", "Interpretação", "Leitura"],
    "3ano": ["Contos", "Histórias", "Narrador", "Personagens"],
    "4ano": ["Gêneros literários", "Poemas", "Contos", "Interpretação"],
    "5ano": ["Textos literários", "Narrativas", "Leitura", "Interpretação"],
    "6ano": ["Gêneros literários", "Narrativa", "Poesia", "Interpretação"],
    "7ano": ["Narrativa", "Poesia", "Teatro", "Figuras de linguagem"],
    "8ano": ["Romance", "Conto", "Crônica", "Interpretação"],
    "9ano": ["Análise literária", "Gêneros", "Narrativas", "Interpretação"],
    "1em": ["Trovadorismo", "Humanismo", "Classicismo", "Quinhentismo"],
    "2em": ["Barroco", "Arcadismo", "Romantismo", "Realismo"],
    "3em": ["Modernismo", "Literatura contemporânea", "Autores", "Revisão ENEM"]
},

"Redação": {
    "1ano": ["Escrita de palavras", "Frases simples", "Criatividade", "Desenho e texto"],
    "2ano": ["Frases", "Pequenos textos", "Pontuação", "Criatividade"],
    "3ano": ["Narrativas", "Histórias", "Parágrafos", "Coerência"],
    "4ano": ["Parágrafos", "Texto descritivo", "Organização", "Coerência"],
    "5ano": ["Produção textual", "Narrativa", "Descrição", "Opinião"],
    "6ano": ["Coerência", "Coesão", "Parágrafos", "Texto narrativo"],
    "7ano": ["Texto descritivo", "Narrativo", "Coesão", "Estrutura"],
    "8ano": ["Texto dissertativo", "Introdução", "Desenvolvimento", "Conclusão"],
    "9ano": ["Argumentação", "Texto dissertativo", "Opinião", "Estrutura"],
    "1em": ["Estrutura da redação", "Introdução", "Tese", "Argumentos"],
    "2em": ["Argumentação", "Coesão", "Conclusão", "Repertório"],
    "3em": ["Redação ENEM", "Competências", "Argumentação", "Treino"]
},

"Sociologia": {
    "1ano": ["Convivência", "Família", "Regras", "Respeito"],
    "2ano": ["Sociedade", "Cultura", "Regras sociais", "Diversidade"],
    "3ano": ["Grupos sociais", "Comunidade", "Cultura", "Respeito"],
    "4ano": ["Sociedade", "Trabalho", "Cultura", "Valores"],
    "5ano": ["Diversidade", "Cultura", "Sociedade", "Respeito"],
    "6ano": ["Grupos sociais", "Cultura", "Sociedade", "Valores"],
    "7ano": ["Cultura", "Sociedade", "Regras", "Diversidade"],
    "8ano": ["Política", "Cidadania", "Sociedade", "Direitos"],
    "9ano": ["Sociedade moderna", "Cultura", "Política", "Cidadania"],
    "1em": ["Cultura", "Sociedade", "Instituições", "Identidade"],
    "2em": ["Trabalho", "Política", "Estado", "Sociedade"],
    "3em": ["Globalização", "Desigualdade", "Movimentos sociais", "Revisão"]
},

"Artes": {
    "1ano": ["Desenho", "Cores", "Formas", "Criatividade"],
    "2ano": ["Pintura", "Cores", "Desenho", "Expressão"],
    "3ano": ["Formas", "Desenho", "Cores", "Criatividade"],
    "4ano": ["Expressão artística", "Desenho", "Pintura", "Criatividade"],
    "5ano": ["Arte livre", "Desenho", "Pintura", "Expressão"],
    "6ano": ["Artes visuais", "Desenho", "Cores", "Formas"],
    "7ano": ["Música", "Som", "Ritmo", "Expressão"],
    "8ano": ["Teatro", "Expressão corporal", "Cena", "Personagem"],
    "9ano": ["Dança", "Movimento", "Expressão", "Ritmo"],
    "1em": ["História da arte", "Arte antiga", "Arte medieval", "Arte moderna"],
    "2em": ["Movimentos artísticos", "Arte moderna", "Arte contemporânea", "Estilos"],
    "3em": ["Arte contemporânea", "Análise artística", "Cultura", "Revisão"]
},
"Filosofia": {
    "1ano": ["Pensar e questionar", "Curiosidade", "Ideias", "Perguntas"],
    "2ano": ["Valores", "Respeito", "Regras", "Convivência"],
    "3ano": ["Ética básica", "Certo e errado", "Reflexão", "Escolhas"],
    "4ano": ["Pensamento crítico", "Opinião", "Reflexão", "Ideias"],
    "5ano": ["Sociedade", "Valores", "Reflexão", "Pensamento"],
    "6ano": ["Pensamento filosófico", "Questionamento", "Ideias", "Reflexão"],
    "7ano": ["Conhecimento", "Verdade", "Opinião", "Lógica"],
    "8ano": ["Ética", "Moral", "Sociedade", "Cidadania"],
    "9ano": ["Filosofia antiga", "Reflexão", "Pensamento crítico", "Ideias"],
    "1em": ["Sócrates", "Platão", "Aristóteles", "Filosofia antiga"],
    "2em": ["Ética", "Política", "Filosofia moderna", "Racionalismo"],
    "3em": ["Filosofia contemporânea", "Existencialismo", "Crítica", "Revisão ENEM"]
},
"Matemática": {
    "1ano": ["Contagem", "Adição", "Subtração", "Formas geométricas"],
    "2ano": ["Números até 100", "Adição", "Subtração", "Medidas"],
    "3ano": ["Multiplicação", "Divisão", "Frações simples", "Geometria"],
    "4ano": ["Multiplicação", "Divisão", "Frações", "Medidas"],
    "5ano": ["Decimais", "Frações", "Área", "Perímetro"],
    "6ano": ["Números inteiros", "Frações", "Razão", "Proporção"],
    "7ano": ["Porcentagem", "Equações", "Expressões", "Geometria"],
    "8ano": ["Equações 1º grau", "Sistemas", "Potência", "Raiz"],
    "9ano": ["Equação 2º grau", "Funções", "Polinômios", "Probabilidade"],
    "1em": ["Função 1º grau", "Função 2º grau", "PA", "PG"],
    "2em": ["Trigonometria", "Logaritmos", "Geometria espacial", "Combinatória"],
    "3em": ["Probabilidade", "Estatística", "Funções", "Revisão ENEM"]
}
};

const materiaDados = dados[materia] || {};

anos.forEach(ano => {
    const div = document.createElement("div");
    div.classList.add("item");

    const botao = document.createElement("button");
    botao.classList.add("botao-materia");
    botao.innerText = formatarAno(ano);

    const conteudoDiv = document.createElement("div");
    conteudoDiv.classList.add("conteudo");

    botao.addEventListener("click", () => {
        document.querySelectorAll(".conteudo").forEach(el => el.innerHTML = "");

        const lista = materiaDados[ano];

        conteudoDiv.innerHTML = `
            <ul>
                ${lista.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    });

    div.appendChild(botao);
    div.appendChild(conteudoDiv);
    conteudo.appendChild(div);
});

function formatarAno(ano) {
    if (ano.includes("em")) {
        return ano.replace("em", "º ano do ensino médio");
    }
    return ano.replace("ano", "º ano");
}