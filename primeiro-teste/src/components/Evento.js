function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, fui avistado! ==> ${numero}`)
    }

    return (
        <div>
            <p>Clique aqui para disparar um eveno</p>
            <button onClick={meuEvento}>Ativar! </button>
        </div>
    )
}

export default Evento