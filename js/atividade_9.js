let listaProdutos = [
    {
        produto: "Leite Barnabé",
        medida: "litro",
        quantidade: 5,
        valor: 7.8
    },
    {
        produto: "Alcatra Friboi",
        medida: "kg",
        quantidade: 1.896,
        valor: 40
    },
    {
        produto: "Refrigerante Toca Polar",
        medida: "pet 2 litros",
        quantidade: 3,
        valor: 8.99
    },
    {
        produto: "Arroz Tio Chicão",
        medida: "Pacote 1kg",
        quantidade: 4,
        valor: 5.99
    },
    {
        produto: "Peito de frango Hot Chicken",
        medida: "kg",
        quantidade: 5,
        valor: 16.99
    }
];

function listarProdutosNaTabela() { 
    let trTds = ""; 
    let resultado = document.getElementById("resultado"); 

    let valorTotalCompra = listaProdutos.reduce(function(total, atual){
        return total + (atual.quantidade * atual.valor);
    }, 0);

    listaProdutos.forEach((produto) => { 
        trTds += `<tr><td>${produto.produto}</td>`;
        trTds += `<td>${produto.medida}</td>`;
        trTds += `<td>${produto.quantidade}</td>`;
        trTds += `<td>${produto.valor}</td></tr>`;
    });
    trTds += `<tr><td colspan='4'><strong>O Valor total da compra é: ${valorTotalCompra}</strong></td></tr>`

    resultado.innerHTML = trTds; 
}

// AO CARREGAR A PAGINA A LISTA JA E EXIBIDA
addEventListener("load", () => listarProdutosNaTabela());
