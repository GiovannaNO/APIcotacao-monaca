window.onload = function (){
    const cotar = document.querySelector('#cotar')
    const cotar2 = document.querySelector('#cotar2')
    const cotar3 = document.querySelector('#cotar3')
    const opcoes = {
                method:'GET',
                mode: 'cors',
                cache:'default'
        }
    cotar.addEventListener('click', function(){
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    document.querySelector("#compra").textContent = data.USDBRL.bid;
                    document.querySelector("#venda").textContent = data.USDBRL.ask;
                    document.querySelector("#variacao").textContent = data.USDBRL.varBid;
                    document.querySelector("#maximo").textContent = data.USDBRL.high;
                    document.querySelector("#minimo").textContent = data.USDBRL.low;
                })
            }
        )
    });
    cotar2.addEventListener('click', function(){
        fetch(`https://economia.awesomeapi.com.br/json/last/EUR-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    document.querySelector("#compra").textContent = data.EURBRL.bid;
                    document.querySelector("#venda").textContent = data.EURBRL.ask;
                    document.querySelector("#variacao").textContent = data.EURBRL.varBid;
                    document.querySelector("#maximo").textContent = data.EURBRL.high;
                    document.querySelector("#minimo").textContent = data.EURBRL.low;
                })
            }
        )
    });
    cotar3.addEventListener('click', function(){
        fetch(`https://economia.awesomeapi.com.br/json/last/BTC-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    document.querySelector("#compra").textContent = data.BTCBRL.bid;
                    document.querySelector("#venda").textContent = data.BTCBRL.ask;
                    document.querySelector("#variacao").textContent = data.BTCBRL.varBid;
                    document.querySelector("#maximo").textContent = data.BTCBRL.high;
                    document.querySelector("#minimo").textContent = data.BTCBRL.low;
                })
            }
        )
    });
}
