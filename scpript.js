function calcular(event) {
    event.preventDefault();

    const nivel = Number(document.getElementById("nivel").value);

    const montagem = 300;
    const total = nivel + montagem;

    document.getElementById("resultado").innerHTML = `
        <p><strong>Valor das peças:</strong> R$ ${nivel}</p>
        <p><strong>Serviço de montagem:</strong> R$ ${montagem}</p>
        <p><strong>Total estimado:</strong> <span style="color:#ff3b3b">R$ ${total}</span></p>
    `;
}
