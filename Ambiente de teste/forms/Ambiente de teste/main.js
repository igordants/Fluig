// Limpar Selecao de tipo de solicitacao
document.addEventListener('DOMContentLoaded', function() {
        const radios = document.querySelectorAll('input[type="radio"][name="resposta"]');
        const limparSelecaoText = document.getElementById('limparSelecao');
        
        limparSelecaoText.addEventListener('click', function() {
            radios.forEach(function(radio) {
                radio.checked = false;
            });
        });
    });

// Limpar Seleçao dos Juros
document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[type="radio"][name="juro"]');
    const limparSelecaoText = document.getElementById('limparSelecao1');
    
    limparSelecaoText.addEventListener('click', function() {
        radios.forEach(function(radio) {
            radio.checked = false;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const jurosSim = document.getElementById('jurosSim');
    const jurosNao = document.getElementById('jurosNao');
    const limparSelecao1 = document.getElementById('limparSelecao1');
    const camposJuros = document.getElementById('camposJuros');

    jurosSim.addEventListener('change', function() {
        if (this.checked) {
            camposJuros.style.display = 'block';
        } else {
            camposJuros.style.display = 'none';
        }
    });

    jurosNao.addEventListener('change', function() {
        if (this.checked && !jurosSim.checked) {
            camposJuros.style.display = 'none';
        }
    });
    
    limparSelecao1.addEventListener('click', function() {
        camposJuros.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const novaEtiquetaInput = document.getElementById('novaEtiqueta');
    const adicionarEtiquetaButton = document.getElementById('adicionarEtiqueta');
    const etiquetasContainer = document.getElementById('etiquetas');

    adicionarEtiquetaButton.addEventListener('click', function() {
        const novaEtiqueta = novaEtiquetaInput.value.trim();
        if (novaEtiqueta !== '') {
            const etiquetaElemento = document.createElement('div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ');
            etiquetaElemento.textContent = novaEtiqueta;
            etiquetaElemento.classList.add('etiqueta');
            etiquetasContainer.appendChild(etiquetaElemento);
            novaEtiquetaInput.value = ''; // Limpa o campo de entrada
        }
    });

    // Opção adicional: Remover etiqueta quando clicada
    etiquetasContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('etiqueta')) {
            event.target.remove();
        }
    });
});





// Condições para os centro de custos a partir da seleção dos Polos


function carregarSubcategorias() {
    // Obtém referências aos elementos select
    const categoriaSelect = document.getElementById('polos');
    const subcategoriaSelect = document.getElementById('centroDEcusto');

    // Limpa as opções atuais do segundo select
    subcategoriaSelect.innerHTML = '';
 
    
    // Obtém o valor selecionado do primeiro select
    const categoriaSelecionada = categoriaSelect.value;

    // Lógica para carregar opções do segundo select com base na escolha do primeiro
    if (categoriaSelecionada === 'Macaiba') {
      criarOpcao(subcategoriaSelect, 'Refeitório Matriz', 'Refeitório Matriz Natal - RN');
      criarOpcao(subcategoriaSelect, 'SAMU', 'Refeitório SAMU Natal - RN');
      criarOpcao(subcategoriaSelect, 'Renner', 'Refeitório RENNER Natal - RN');
      criarOpcao(subcategoriaSelect, 'Nat. Divino Amor', 'Refeitório Mat. Divino Amor Natal - RN');
      criarOpcao(subcategoriaSelect, 'João Machado', 'Refeitório João Machado Natal - RN');
      criarOpcao(subcategoriaSelect, 'UPA Parnamirim', 'Refeitório UPA Parnamirim - RN');
      criarOpcao(subcategoriaSelect, 'Márcio Marinho Pirangi', 'Refeitório Hosp. Márcio Marinho Pirangi Natal - RN');
      criarOpcao(subcategoriaSelect, 'Copagás Extremoz', 'Refeitório Copagás Extremoz - RN');
    } else if (categoriaSelecionada === 'RioDeJaneiro') {
      criarOpcao(subcategoriaSelect, 'Rocha Faria', 'Refeitório Hosp. Rocha Faria - RJ');
      criarOpcao(subcategoriaSelect, 'Munir Rafull', 'Refeitório Hosp. Munir Rafull - RJ');
      criarOpcao(subcategoriaSelect, 'S. joão batista', 'Refeitório Hosp. S.João Batista - RJ');
      criarOpcao(subcategoriaSelect, 'Hosp. Brasilata', 'Refeitório Hosp. Brasilata - RJ');
    } else if (categoriaSelecionada === 'Maranhão') {
      criarOpcao(subcategoriaSelect, 'Central São Luís', 'Refeitório Cenral São Luís - MA');
      criarOpcao(subcategoriaSelect, 'ILA São Luís', 'Refeitório ILA São Luís - MA');
      criarOpcao(subcategoriaSelect, 'Refeitório Paulo Freire', 'Refeitório Paulo Freire São Luís - MA');
      criarOpcao(subcategoriaSelect, 'Refeitório Sta Amélia São Luís', 'Refeitório Sta Amélia São Luís - MA');
      criarOpcao(subcategoriaSelect, 'Refeitório COLUN São Luís', 'Refeitório COLUN são Luís - MA');
  }   else if (categoriaSelecionada === 'MinasGerais') {
      criarOpcao(subcategoriaSelect, 'Refeitório Glória Uberlândia', 'Refeitório Glória Uberlândia - MG');
      criarOpcao(subcategoriaSelect, 'Refeitório Umuarama Uberlândia', 'Refeitório Umuarama Uberlândia - MG');
      criarOpcao(subcategoriaSelect, 'Refeitório Santa Mônica', 'Refeitório Santa Mônica Uberlândia - MG');
  } else if (categoriaSelecionada === 'Sergipe') {
      criarOpcao(subcategoriaSelect, 'Refeitório Aracaju', 'Refeitório Aracaju - SE');
  } else if (categoriaSelecionada === 'Alagoas') {
      criarOpcao(subcategoriaSelect, 'Refeitório HU Maceió', 'Refeitório HU Maceió - AL');
      criarOpcao(subcategoriaSelect, 'Refeitório Rei Pelé Maceió', 'Refeitório Rei Pelé Maceió - AL');
      criarOpcao(subcategoriaSelect, 'Refeitório Teknosonda Maceió', 'Refeitório Teknosonda Maceió - AL');
  } else if (categoriaSelecionada === 'Pernambuco'){
      criarOpcao(subcategoriaSelect, 'Refeitório HC Recife', 'Refeitório HC Recife - PE');
  }
}
  function criarOpcao(select, valor, texto) {
    // Cria e adiciona uma nova opção ao select
    var option = document.createElement('option');
    option.value = valor;
    option.text = texto;
    select.add(option);
  }