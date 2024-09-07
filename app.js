function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Converte para minúsculo para busca case-insensitive

    if (campoPesquisa == "") {
        section.innerHTML = "Nada encontrado"
        return
    }
  
    let resultados = "";
  
    if (dados && dados.length > 0) {
      for (let dado of dados) {
        const titulo = dado.titulo.toLowerCase(); // Converte para minúsculo para comparação
        if (titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
          const tituloComDestaque = titulo.replace(new RegExp(campoPesquisa, 'gi'), `<mark>$&</mark>`);
          resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${tituloComDestaque}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
          `;
        }
      }
       if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
       }

    } else {
      resultados = "<p>Nenhum resultado encontrado.</p>";
    }
  
    section.innerHTML = resultados;
  }

