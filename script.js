        function randomChoice(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
        const a =[
        '"A porta se abriu devagar e não havia ninguém ali..."',

        '"Olhe para o céu hoje, o sol está brilhando mais do que nunca!"',

        '"Tudo o que eu queria era apenas um minuto de silêncio."',

        '"Você realmente acredita que as coisas vão mudar de repente?"',

        '"O vento soprava forte, levando embora as folhas e os meus pensamentos."']
        
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
