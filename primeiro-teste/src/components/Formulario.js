function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        console.log('Cadastrou um usuário')
    }

    return(
        <div>
            <h1> cadastro </h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div> 
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario