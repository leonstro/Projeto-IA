function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
}

function selectOption(option) {
    const chatBody = document.querySelector('.chat-body');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = option;
    chatBody.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = getBotResponse(option);
    chatBody.appendChild(botMessage);

    chatBody.scrollTop = chatBody.scrollHeight; // Rolagem para a última mensagem
}

function getBotResponse(option) {
    const responses = {
        'Transtorno de Ansiedade': 'O Transtorno de Ansiedade é uma condição que causa preocupação excessiva e medo. Os sintomas podem incluir nervosismo, inquietação e dificuldade em concentrar-se. Se você está se sentindo ansioso frequentemente, é importante procurar a ajuda de um profissional. Psicólogos e psiquiatras podem oferecer terapia e, em alguns casos, medicamentos para ajudar a controlar os sintomas.',
        'Transtorno Depressivo': 'O Transtorno Depressivo é caracterizado por uma tristeza persistente que interfere nas atividades diárias. Sintomas podem incluir perda de interesse em atividades antes prazerosas, alterações no apetite e dificuldade em dormir. É fundamental conversar com um psicólogo ou psiquiatra, que pode ajudar com terapia e, se necessário, medicação.',
        'TDAH': 'O TDAH (Transtorno do Déficit de Atenção com Hiperatividade) afeta a capacidade de se concentrar e controlar impulsos. Crianças e adultos podem apresentar dificuldades em manter a atenção e seguir instruções. Se você ou alguém que você conhece apresenta esses sintomas, é importante buscar a avaliação de um profissional da saúde mental.',
        'TOC': 'O TOC (Transtorno Obsessivo-Compulsivo) envolve obsessões e compulsões. As obsessões são pensamentos indesejados, enquanto as compulsões são comportamentos repetitivos realizados para aliviar a ansiedade. Se você sentir que seus pensamentos e comportamentos estão fora de controle, considere consultar um psicólogo ou psiquiatra para tratamento.',
    };
    return responses[option] || 'Desculpe, não tenho informações sobre esse transtorno.';
}
