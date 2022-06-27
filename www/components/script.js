window.onload = function (){
    const opcoes = {
                method:'GET',
                mode: 'cors',
                cache:'default'
        }

        var a ="";
    cotar.addEventListener('click', function(){
        let select = document.querySelector('#select').value;
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    if(select == 'cotar1'){
                        a=data.USDBRL;
                    }
                    else if(select == 'cotar2'){
                        a=data.EURBRL;
                    }
                    else if(select == 'cotar3'){
                        a=data.BTCBRL;
                    }

                    document.querySelector('#compra').textContent = a.bid;
                    document.querySelector('#venda').textContent = a.ask;
                    document.querySelector('#variacao').textContent = a.varBid;
                    document.querySelector('#maximo').textContent = a.high;
                    document.querySelector('#minimo').textContent = a.low;
                })
            }
        )
    });
}