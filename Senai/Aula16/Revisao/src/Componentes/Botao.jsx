export function Botao({cor, conteudo, altura, largura}){
    return(
        <>
            <button style={{backgroundColor: cor, height: altura, width: largura}}>{conteudo}</button>
        </>
    )
}