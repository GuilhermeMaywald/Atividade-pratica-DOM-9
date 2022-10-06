let listaProdutos = [
    {
        id: 1,
        produto: "Leite Barnabé",
        medida: "litro",
        quantidade: 5,
        valor: 7.8
    },
    {
        id: 2,
        produto: "Alcatra Friboi",
        medida: "kg",
        quantidade: 1.896,
        valor: 40
    },
    {
        id: 3,
        produto: "Refrigerante Toca Polar",
        medida: "pet 2 litros",
        quantidade: 3,
        valor: 8.99
    },
    {
        id: 4,
        produto: "Arroz Tio Chicão",
        medida: "Pacote 1kg",
        quantidade: 4,
        valor: 5.99
    },
    {
        id: 5,
        produto: "Peito de frango Hot Chicken",
        medida: "kg",
        quantidade: 5,
        valor: 16.99
    }
];

function listarProdutosNaTabela(filtrados = undefined) { 
    let trTds = ""; 
    let lista = []; 
    let resultado = document.getElementById("resultado"); 

    lista = filtrados === undefined ? listaProdutos : filtrados; 

    lista.forEach((produto) => { 
        trTds += `<tr><td>${produto.id}</td>`;
        trTds += `<td>${produto.produto}</td>`;
        trTds += `<td>${produto.medida}</td>`;
        trTds += `<td>${produto.quantidade}</td>`;
        trTds += `<td>${produto.valor}</td></tr>`;
    });
    resultado.innerHTML = trTds; 

    let valoresListaProdutos = listaProdutos.map(function(item){
        return item.valor;
    });
    
    valorTotal = valoresListaProdutos.reduce(function(total, medida){
        return total += medida;
    });
}



// AO CARREGAR A PAGINA A LISTA JA E EXIBIDA
addEventListener("load", () => listarProdutosNaTabela());
