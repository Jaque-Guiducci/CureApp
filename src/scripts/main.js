export default () => {
    const container = document.createElement('div')
    const templateMain = `<div id="home">
    <section id="main-first-section">
        <h1>Você pode ajudar a curar alguém!</h1>
    </section>
    <section id="main-second-section">
        <h2>MISSÃO</h2>
        <p>Nossa missão é conectar pessoas, é levar medicamento a quem precisa de forma legal e segura</p>
        <span><i class="fa-solid fa-hand-holding-heart"></i><span>
    </section>
    <section id="main-third-section">
        <div>
            <h3>QUEM RECEBE AJUDA?</h3>
            <p>Pessoas que tem necessidade de medicamento, para tratamento pontual ou contínuo, e fornecem a documentação solicitada são cadastradas em nossa base de dados e podem abrir uma campanha de arrecadação.</p>
        </div>
    </section>
    <section id="main-fourth-section">
        <div>
            <h3>QUEM ENTREGA OS MEDICAMENTOS?</h3>
            <p>Farmácias cadastradas, próximas a localização de quem recebe a doação, farão a entrega do medicamento. Mas não se preocupe, você saberá de antemão qual é a farmácia e quem é o beneficiário de sua doação.</p>
        </div>
    </section>
    <section id="main-fifth-section">
        <div>
            <h3>QUEM PODE DOAR?</h3>
            <p>Qualquer pessoa pode doar! Você pode inclusive fazer uma doação anônima se preferir.</p>
        </div>
    </section>
    <section id="buttons-section">
        <button>
            <i class="fa-solid fa-hand-holding-heart"></i>
            <p>QUERO DOAR!</p>
        </button>
        <button>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>PRECISO DE DOAÇÃO!</p>
        </button>
        <button>
            <i class="fa-solid fa-pills"></i>
            <p>QUERO SER FARMÁCIA PARCEIRA</p>
        </button>
    </section>
</div>`
    container.innerHTML = templateMain

    return container
}