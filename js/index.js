const html = document.documentElement;
const botaoTema = document.querySelector('.btn-tema');
const botoesIdioma = document.querySelectorAll('.btn-idioma');
const botaoClima = document.getElementById('btnClima');
const climaTexto = document.getElementById('climaTexto');


const traducoes = {
    pt: {
        pageTitle: 'Portfólio Pessoal',
        siteTitle: 'Meu Portfólio',
        navInicio: 'Início',
        navProjetos: 'Projetos',
        navHabilidades: 'Habilidades',
        navExperiencia: 'Experiência',
        navEducacao: 'Educação',
        navContato: 'Contato',

        heroTitle: 'Olá, eu sou Murilo Rolim',
        heroText: 'Sou estudante e desenvolvedor em formação, com interesse em criação de interfaces, lógica de programação e desenvolvimento web. Gosto de transformar ideias em projetos funcionais, organizados e visualmente atraentes.',
        btnProjetos: 'Ver projetos',
        btnContato: 'Entrar em contato',

        secProjetos: 'Projetos',
        projetoJogoTitulo: 'Jogo da Memória',
        projetoJogoDesc: 'Projeto interativo desenvolvido para treinar lógica, manipulação do DOM e integração com API. O jogo carrega palavras, salva partidas e mostra ranking.',
        projetoJogoLink: 'Abrir Jogo da Memória',
        projetoPortfolioTitulo: 'Portfólio Pessoal',
        projetoPortfolioDesc: 'Site desenvolvido com HTML, CSS e JavaScript para apresentar habilidades, projetos, experiência e formas de contato de maneira organizada e responsiva.',

        secHabilidades: 'Habilidades',
        skillHtml: 'HTML',
        skillCss: 'CSS',
        skillJs: 'JavaScript',
        skillPython: 'Python',
        skillJava: 'Java',
        skillGit: 'Git e GitHub',

        secExperiencia: 'Experiência',
        expTitulo: 'Projeto acadêmico • Desenvolvimento Web',
        expInstituicao: 'Instituto Federal do Paraná - Campus Paranavaí',
        expPeriodo: '2024 - atual',
        expTexto: 'Desenvolvimento de um portfólio pessoal com foco em semântica, responsividade, organização visual e integração com API para apresentação de funcionalidades interativas.',

        secEducacao: 'Educação',
        eduTitulo: 'Instituto Federal do Paraná - Campus Paranavaí',
        eduCurso: 'Curso: Informática / Desenvolvimento de Sistemas',
        eduPeriodo: 'Período: 2024 - atual',
        eduTexto: 'Formação focada em programação, lógica, desenvolvimento de sistemas e construção de interfaces.',

        secContato: 'Contato',
        contatoMeus: 'Meus contatos',
        contatoEmail: 'E-mail: MuriloRolim2005@gmail.com',
        contatoTelefone: 'Telefone: (55) 44 99167-2005',
        githubLabel: 'GitHub:',
        contatoFormTitulo: 'Formulário de contato',
        labelNome: 'Nome',
        labelEmail: 'E-mail',
        labelMensagem: 'Mensagem',
        placeholderNome: 'Seu nome',
        placeholderEmail: 'seuemail@email.com',
        placeholderMensagem: 'Escreva sua mensagem',
        btnEnviar: 'Enviar',
        footerText: 'Instituto Federal do Paraná - Campus Paranavaí',

        altFotoPerfil: 'Foto de perfil de Murilo Rolim',
        altImagemDecorativa: 'Borboleta decorativa',
        
    },

    en: {
        pageTitle: 'Personal Portfolio',
        siteTitle: 'My Portfolio',
        navInicio: 'Home',
        navProjetos: 'Projects',
        navHabilidades: 'Skills',
        navExperiencia: 'Experience',
        navEducacao: 'Education',
        navContato: 'Contact',

        heroTitle: 'Hi, I am Murilo Rolim',
        heroText: 'I am a student and aspiring developer, interested in interface design, programming logic, and web development. I like turning ideas into functional, organized, and visually appealing projects.',
        btnProjetos: 'See projects',
        btnContato: 'Get in touch',

        secProjetos: 'Projects',
        projetoJogoTitulo: 'Memory Game',
        projetoJogoDesc: 'Interactive project developed to practice logic, DOM manipulation, and API integration. The game loads words, saves matches, and shows a ranking.',
        projetoJogoLink: 'Open Memory Game',
        projetoPortfolioTitulo: 'Personal Portfolio',
        projetoPortfolioDesc: 'Website developed with HTML, CSS, and JavaScript to present skills, projects, experience, and contact details in an organized and responsive way.',

        secHabilidades: 'Skills',
        skillHtml: 'HTML',
        skillCss: 'CSS',
        skillJs: 'JavaScript',
        skillPython: 'Python',
        skillJava: 'Java',
        skillGit: 'Git and GitHub',

        secExperiencia: 'Experience',
        expTitulo: 'Academic project • Web Development',
        expInstituicao: 'Federal Institute of Paraná - Paranavaí Campus',
        expPeriodo: '2024 - present',
        expTexto: 'Development of a personal portfolio focused on semantics, responsiveness, visual organization, and API integration for interactive features.',

        secEducacao: 'Education',
        eduTitulo: 'Federal Institute of Paraná - Paranavaí Campus',
        eduCurso: 'Course: Computer Science / Systems Development',
        eduPeriodo: 'Period: 2024 - present',
        eduTexto: 'Training focused on programming, logic, system development, and interface building.',

        secContato: 'Contact',
        contatoMeus: 'My contacts',
        contatoEmail: 'Email: MuriloRolim2005@gmail.com',
        contatoTelefone: 'Phone: (55) 44 99167-2005',
        githubLabel: 'GitHub:',
        contatoFormTitulo: 'Contact form',
        labelNome: 'Name',
        labelEmail: 'Email',
        labelMensagem: 'Message',
        placeholderNome: 'Your name',
        placeholderEmail: 'your@email.com',
        placeholderMensagem: 'Write your message',
        btnEnviar: 'Send',
        footerText: 'Federal Institute of Paraná - Paranavaí Campus',

        altFotoPerfil: 'Murilo Rolim profile photo',
        altImagemDecorativa: 'Decorative butterfly',
       
    }
};

function setText(id, value) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = value;
}

function setPlaceholder(id, value) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.placeholder = value;
}

function trocarIdioma(lang) {
    const t = traducoes[lang];
    if (!t) return;

    html.lang = lang === 'pt' ? 'pt-br' : 'en';
    document.title = t.pageTitle;

    setText('siteTitle', t.siteTitle);

    setText('navInicio', t.navInicio);
    setText('navProjetos', t.navProjetos);
    setText('navHabilidades', t.navHabilidades);
    setText('navExperiencia', t.navExperiencia);
    setText('navEducacao', t.navEducacao);
    setText('navContato', t.navContato);

    setText('heroTitle', t.heroTitle);
    setText('heroText', t.heroText);
    setText('btnProjetos', t.btnProjetos);
    setText('btnContato', t.btnContato);

    setText('secProjetos', t.secProjetos);
    setText('projetoJogoTitulo', t.projetoJogoTitulo);
    setText('projetoJogoDesc', t.projetoJogoDesc);
    setText('projetoJogoLink', t.projetoJogoLink);
    setText('projetoPortfolioTitulo', t.projetoPortfolioTitulo);
    setText('projetoPortfolioDesc', t.projetoPortfolioDesc);

    setText('secHabilidades', t.secHabilidades);
    setText('skillHtml', t.skillHtml);
    setText('skillCss', t.skillCss);
    setText('skillJs', t.skillJs);
    setText('skillPython', t.skillPython);
    setText('skillJava', t.skillJava);
    setText('skillGit', t.skillGit);

    setText('secExperiencia', t.secExperiencia);
    setText('expTitulo', t.expTitulo);
    setText('expInstituicao', t.expInstituicao);
    setText('expPeriodo', t.expPeriodo);
    setText('expTexto', t.expTexto);

    setText('secEducacao', t.secEducacao);
    setText('eduTitulo', t.eduTitulo);
    setText('eduCurso', t.eduCurso);
    setText('eduPeriodo', t.eduPeriodo);
    setText('eduTexto', t.eduTexto);

    setText('secContato', t.secContato);
    setText('contatoMeus', t.contatoMeus);
    setText('contatoEmail', t.contatoEmail);
    setText('contatoTelefone', t.contatoTelefone);
    setText('githubLabel', t.githubLabel);
    setText('contatoFormTitulo', t.contatoFormTitulo);
    setText('labelNome', t.labelNome);
    setText('labelEmail', t.labelEmail);
    setText('labelMensagem', t.labelMensagem);
    setText('btnEnviar', t.btnEnviar);
    setText('footerText', t.footerText);

    setPlaceholder('nome-contato', t.placeholderNome);
    setPlaceholder('email-contato', t.placeholderEmail);
    setPlaceholder('mensagem', t.placeholderMensagem);

    const fotoPerfil = document.getElementById('fotoPerfil');
    const imagemDecorativa = document.getElementById('imagemDecorativa');

    if (fotoPerfil) fotoPerfil.alt = t.altFotoPerfil;
    if (imagemDecorativa) imagemDecorativa.alt = t.altImagemDecorativa;

    botoesIdioma.forEach((botao) => {
        botao.classList.toggle('ativo', botao.dataset.lang === lang);
    });
}

botoesIdioma.forEach(botao => {
    botao.addEventListener('click', () => {
        trocarIdioma(botao.dataset.lang);
    });
});


botaoTema.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme');

    if (temaAtual === 'light') {
        html.setAttribute('data-theme', 'dark');
        botaoTema.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'light');
        botaoTema.textContent = '🌙';
    }
});

trocarIdioma('pt');

function buscarClima() {
    if (!navigator.geolocation) {
        climaTexto.textContent = 'N/D';
        return;
    }

    climaTexto.textContent = '...';

    navigator.geolocation.getCurrentPosition(
        async (posicao) => {
            const lat = posicao.coords.latitude;
            const lon = posicao.coords.longitude;

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`;

            try {
                const resposta = await fetch(url);
                const dados = await resposta.json();

                const temperatura = dados.current.temperature_2m;
                climaTexto.textContent = `${Math.round(temperatura)}°C`;
            } catch (erro) {
                climaTexto.textContent = 'ERRO';
            }
        },
        () => {
            climaTexto.textContent = 'NEGADO';
        }
    );
}

if (botaoClima && climaTexto) {
    botaoClima.addEventListener('click', buscarClima);
}