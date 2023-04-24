$(document).ready(function() {
    // Função que faz a requisição AJAX para a API e atualiza o HTML da página com os resultados
    function recomendar() {
        // Obter o feedback digitado pelo usuário
        var feedback = $('#feedback').val().toLowerCase();

        // Fazer a requisição AJAX para a API
        $.ajax({
            url: 'http://localhost:8000/recomendar',
            data: {
                callback: 'callback',
                feedback: feedback
            },
            dataType: 'jsonp',
            success: function(data) {
                // Adicionar os resultados à página
                $.each(data, function(index, restaurante) {
                    $('#restaurante' + (index + 1)).html(
                        '<h2>' + restaurante[0].name + '</h2>' +
                        '<p>Média: ' + (restaurante[1] * 10).toFixed(1) + '</p>' +
                        '<p>Endereço: ' + restaurante[0].address + '</p>' +
                        '<p>Tipo da cozinha: ' + restaurante[0].cuisine + '</p>' +
                        `<p>Preço: ${restaurante[0].price === null ? 'preço não informado' : restaurante[0].price}</p>`
                    );
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#resultados').text('Erro ao fazer requisição AJAX: ' + textStatus + ', ' + errorThrown);
            }
        });
    }

    // Adicionar um evento de clique ao botão
    $('#recomendar').click(function() {
        $('#resultados').show();
        recomendar();
    });
});
