        function randomChoice(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
        const a =[
        '"A porta se abriu devagar e não havia ninguém ali..."',

        '"Olhe para o céu hoje, o sol está brilhando mais do que nunca!"',

        '"Tudo o que eu queria era apenas um minuto de silêncio."',

        '"Você realmente acredita que as coisas vão mudar de repente?"',

        '"O vento soprava forte, levando embora as folhas e os meus pensamentos."',

        '"Tudo o que eu precisava era de um pouco de luz."',

        '"Eu só queria que alguém me escutasse por um instante."',

        '"Naquele dia, o mundo inteiro pareceu mudar de lugar."',

        '"Depois da tempestade, ficou só o eco da minha voz."',

        '"Ninguém percebeu quando eu atravessei a rua correndo."',

        '"Havia tanta cor no céu que eu não consegui explicar."',

        '"Por um segundo, tudo ficou em completo silêncio."',

        '"Eu esperei a noite inteira por aquela resposta."',

        '"Quando a porta se fechou, nada mais foi como antes."',

        '"Só percebi que estava sozinho quando a música parou."',

        '"O dia amanheceu diferente e eu logo percebi."',

        '"Havia algo no ar que ninguém sabia explicar."',

        '"Foi só abrir os olhos para tudo parecer outro lugar."',

        '"A última luz da tarde ficou parada na janela."',
        
        '"Depois daquele instante, eu nunca mais fui o mesmo."']
        
        document.querySelector(".jss").innerText = randomChoice(a)

        const corpo = document.body;
        const layouts = [
            "fauvismo",
            "expressionismo"
        ];
        const r = randomChoice(layouts);
        
        if (r === "fauvismo") {
            corpo.classList.add('layout1');
        } else if (r === "expressionismo") {
            corpo.classList.add('layout2');
        }
