function cadastrarPet() {

    // impede qualquer submit automático caso exista
    event.preventDefault();

    const nomeTutor = document.getElementById("nomeTutor").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const nomePet = document.getElementById("nomePet").value;
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const raca = document.getElementById("raca").value;
    const peso = document.getElementById("peso").value;
    const observacoes = document.getElementById("observacoes").value;

    alert(`Novo Pet cadastrado com sucesso ! 🎉🐾
Nome do tutor: ${nomeTutor}
Email: ${email}
Telefone: ${telefone}
Nome do Pet: ${nomePet}
Espécie: ${especie}
Idade: ${idade}
Raça: ${raca}
Peso: ${peso}kg
Observações: ${observacoes}`);

    // Redireciona para feedback.html
    window.location.href = "https://menezesdouglas.github.io/petshop-petacu/feedback.html";
}
