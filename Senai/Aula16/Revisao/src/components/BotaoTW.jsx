export function BotaoTW({cor, altura, largura, conteudo, hover}){
    return (
        <>
        <button className={`${cor} ${altura} ${largura} ${hover}`}>{conteudo}</button>
        </>
    )
}

