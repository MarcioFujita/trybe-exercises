window.onload = function () {
    function populateComboEstados() {
        const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
        const estadosAbreviados = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
        for (let index = 0; index <= estados.length; index += 1){
            const est = document.getElementById('estado');
            let newState = document.createElement('option');
            let newStateValue = estadosAbreviados[index];
            let newStateText = estados[index];
            newState.id = newStateValue;
            newState.innerText = newStateText;
            est.appendChild(newState);
        }
    }
    populateComboEstados();

    const date = document.getElementById('data-inicio');
    function dateValidate(){
        const valueDate = date.value;
        const result = valueDate.split('/');
        if (result.length != 3){
            alert('Favor utilizar / para separar dia, mes e ano');
        } else {
            if (result[0] < 1 || result[0] > 31){
              alert('O dia deve ser MAIOR que ZERO e MENOR que 31');
            } else if (result[1] < 1 || result[1] > 12) {
                alert('O mes deve ser MAIOR que ZERO e MENOR que 12');
            } else if (result[2] < 0) {
            alert('O ano não pode ser negativo')
            }
        }
    }
    date.addEventListener('blur', dateValidate)
}
