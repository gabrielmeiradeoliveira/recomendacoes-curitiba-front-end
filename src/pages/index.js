function mostrarRecomendados(recomendados) {
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            if (recomendados.length === 0) {
                resultado.innerHTML = "<p>Nenhum restaurante encontrado.</p>";
                return;
            }
            for (var i = 0; i < recomendados.length; i++) {
                var restaurante = recomendados[i][0];
                var media_sentimento = recomendados[i][1];
                var nome = restaurante.name;
                var endereco = restaurante.address;
                var pontuacao = restaurante.rating;
                var comentario = restaurante.reviews[0].content;
                var div = document.createElement("div");
                div.innerHTML = "<h3>" + nome + "</h3><p>" + endereco + "</p><p>Média de sentimento: " + media_sentimento + "</p>";
                resultado.appendChild(div);
            }
