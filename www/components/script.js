window.onload = function (){
    const opcoes = {
                method:'GET',
                mode: 'cors',
                cache:'default'
        }
    cotar.addEventListener('click', function(){
        let select = document.querySelector('#select').value;
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    if(select == 'cotar1'){
                        document.querySelector('#compra').textContent = data.USDBRL.bid;
                        document.querySelector('#venda').textContent = data.USDBRL.ask;
                        document.querySelector('#variacao').textContent = data.USDBRL.varBid;
                        document.querySelector('#maximo').textContent = data.USDBRL.high;
                        document.querySelector('#minimo').textContent = data.USDBRL.low;
                    }
                    else if(select == 'cotar2'){
                        document.querySelector('#compra').textContent = data.EURBRL.bid;
                        document.querySelector('#venda').textContent = data.EURBRL.ask;
                        document.querySelector('#variacao').textContent = data.EURBRL.varBid;
                        document.querySelector('#maximo').textContent = data.EURBRL.high;
                        document.querySelector('#minimo').textContent = data.EURBRL.low;
                    }
                    else if(select == 'cotar3'){
                        document.querySelector('#compra').textContent = data.BTCBRL.bid;
                        document.querySelector('#venda').textContent = data.BTCBRL.ask;
                        document.querySelector('#variacao').textContent = data.BTCBRL.varBid;
                        document.querySelector('#maximo').textContent = data.BTCBRL.high;
                        document.querySelector('#minimo').textContent = data.BTCBRL.low;
                    }
                })
            }
        )
    });
}