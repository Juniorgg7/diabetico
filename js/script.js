const iconeMenuMobile = document.querySelector('.menu-mobile');
const barras = document.querySelectorAll('.barra');
const menuAtivo = document.querySelector('.menu-navegacao ul');
const sections = document.querySelectorAll('.sections');
const blockquote = document.querySelectorAll('.descricaoMenu blockquote');
const opcoes = document.querySelectorAll('.opcoes p');
const arow = document.querySelectorAll('.defi dl dt');
const definicaoDiabetes = document.querySelectorAll('.defi dl dd');

function abrirEFecharMenuMobile() {

    iconeMenuMobile.addEventListener('click', function () {

        mudarIconeBarras();
        showDownUpSlide();
    });

}

//.style.transform = "rotate(7deg)";
function mudarIconeBarras() {
    barras.forEach(function (barra, index) {

        if (index === 0) {
            if (barra.classList.contains('barraRemove')) {
                barra.classList.remove('barraRemove');
                barra.classList.add('barraXs');

            } else {
                barra.classList.remove('barraXs');
                barra.classList.add('barraRemove');
            }
        }

        if (index === 2) {
            if (barra.classList.contains('barraRemove')) {
                barra.classList.remove('barraRemove');
                barra.classList.add('barraXs2');

            } else {
                barra.classList.remove('barraXs2');
                barra.classList.add('barraRemove');
            }

        }
    });
}

function showDownUpSlide() {
    if (menuAtivo.classList.contains('menu-mobile-ativo')) {
        menuAtivo.classList.remove('menu-mobile-ativo');
        menuAtivo.classList.add('menu-mobile-inativo');
    } else {
        menuAtivo.classList.remove('menu-mobile-inativo');
        menuAtivo.classList.add('menu-mobile-ativo');
    }
}

function showSlideMenu() {
    opcoes.forEach(function (opcao, index) {

        opcao.addEventListener('click', function () {
            blockquote.forEach(function (item) {
                item.classList.remove('ativo');
            });

            blockquote[index].classList.add('ativo');

        });
    });
}

function addArow() {
    arow.forEach(function (item, index) {
        item.addEventListener('click', function () {
            definicaoDiabetes[index].classList.toggle('ativo');
            item.classList.toggle('arow');
        });
    });


}

function moveScroll() {
    window.addEventListener('scroll', function () {
        sections.forEach(function (section, index) {
            const windowMetade = window.innerHeight * 0.6;
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if (isSectionVisible) {
                section.classList.add('js-sections-ativo');
            }
        });
    });
}

function linksInternos() {
    const links = document.querySelectorAll('.menu-navegacao ul li a');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //   top: topo,
        //   behavior: 'smooth',
        // });
    }

    links.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

/**
 * if(item.classList.contains('ativo')) {
                item2.innerHTML += " &#11179;";
            }else {
                item2.innerHTML += " &#11183;";
            }
 */
window.onload = function () {
    abrirEFecharMenuMobile();
    showSlideMenu();
    addArow();
    moveScroll();
    linksInternos();
}