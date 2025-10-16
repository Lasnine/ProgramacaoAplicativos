export function BotaoCSS({cor, conteudo, altura, largura}){
    return(
        <>
            <button style={{backgroundColor: cor, height: altura, width: largura}}>{conteudo}</button>
        </>
    )
}

