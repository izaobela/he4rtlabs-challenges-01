    function valores(){
        var tDiario = document.getElementById('tDiario').value;
        var dEfetivos = document.getElementById('dEfetivos').value;
        var dFerias = document.getElementById('dFerias').value;
        var vTotal = document.getElementById('vTotal').value;
    }



    /*function validar(){
        valores();

        if(tDiario.value == "" || dEfetivos.value == "" || dFerias.value == "" || vTotal.value == ""){

            document.getElementById('erro').innerHTML = 'Verifique os campos!';
        }
        else{
            document.getElementById('erro').innerHTML = '';
        }
    }*/

    function enviar(){
        valores();
        //validar();

    var valorHora = (vTotal.value / (dEfetivos.value * 4 * tDiario.value) ) + ( ( dFerias.value * dEfetivos.value * tDiario.value) );
        if(!isNaN(valorHora) && isFinite(valorHora)){
        document.getElementById('result').innerHTML = 'Sua hora vale R$' + (parseFloat(valorHora.toFixed(2))).toString().replace(".",",");
            }
    }

    function limpar(){
        window.location.reload(true);
    }

