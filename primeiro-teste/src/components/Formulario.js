import { useState } from "react"

function Formulario() {

    function cadastrar(e) {
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrou um usuário')
        console.log(`Usuario ${nome} cadastrado`)
    }

    const [ nome, setNome ] = useState('')
    const [ senha, setSenha] = useState('')

    return (
        <div>
            <h1> cadastro </h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e)=> setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Formulario