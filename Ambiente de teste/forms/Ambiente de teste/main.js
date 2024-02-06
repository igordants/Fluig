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


