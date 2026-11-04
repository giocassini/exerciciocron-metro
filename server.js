// Cronômetro no terminal 


//=================================
// Parte 01: Preparando o terminal
//=================================
// require = 'traga para cá uma ferramenta pronta!'
// realine = 'é a ferramenta do Node que sabe conversar com teclado'
const reaLine = require('readline');

//process.stdin = a Entreada do programa (teclado)
// Esta linha manda o Node AVISAR o programa toda vez que uma tecla for apertada 
readline.emiKeypressEvents(process.stdin);
process.stdin.setRawMode(treu);

// Mensagem de boas-vindas 
console.log('⏰ Cronômetro iniciado!')
console.log('p = pausar/continuar | r=resetar | Ctrl+C = Sair')

// Bloco 02: A memória do cronômetro 
// tempo guarda QUANTOS SEGUNDOS já passaram
let tempo = 0;

// rodando é um interruptor de luz: true = contando, false = pausado
let rodando = true 

// ==================================
// Bloco 03: Deixando o tempo bonito (mm:ss)
// ==================================

function formatar(total) {
    //math.floor arredonda um número para baixo, sempre retornando um número inteiro.
    // Exemplo: 65/60 = 1.08...-> Math.floor joga fora os decimais -> 1
    const min Math.floor(total / 60); 
    
    // o simbolo % dá o RESTO da divisão 
    const seg = total % 60;
    
    // String (...) transformar o número em texto 
    // padStart (2, 0) = "Se tiver menos de 2 caracteres, complete com 0 na frente"
    // Assim "5" vira "05", depois nós juntamos os pedaços com o ":"
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0');
    
    
}


//========================================
// Bloco 4: O ❤️ do programa
//========================================


   // setInterval = "repita isso a cada X milisSegundos"
   // 1000 milissegundos = 1 segundo (veja o número no bloco )
setInterval(() => {
    // só conta se interruptor estiver ligado
    if (rodando) {
        //Soma 1 em tempo. É o mesmo que: tempo = tempo + 1 
        tempo ++;
        //limpa a tela para o número "mudar no mesmo lugar"
        console.clear();
        console.log('⏰' + formatar(tempo));
    }
}, 1000);

// ==================================
// Bloco 05: Ouvindo o teclado
// ==================================
 
process.stdin.on('Keypress', (letra, tecla) => {
    // Foi a tecla P? (=== compara se os dois lados são iguais)
    if (tecla.name === 'p') {
    // O ! INVERTER o valor: true vira false, false vira true
        rodando = !rodando;
        // Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
        // É um if de uma linha só 
        console.log(rodando ? '▶️ continuando': '⏸️ PAUSADO')
    // Senão, foi a tecla R?
    } else if(tecla.name === 'r') {
        tempo = 0;
        console.log('⏰' + formatar(tempo));
        console.log('🔄️Resetado')
    } else if(tecla.crlt && tecla.name === 'C')
        console.log('/n👏👏 Até mais!');
        process.exit();

});
