import RickMorty from '../Imagens/gif.gif'
function Abount() {
    return (
        <>
            <h1 style={{color: '#62b134', fontFamily: 'oblique', fontWeight:'bold'}}>SOBRE</h1>
            <div className="flex justify-center">
                <p className="max-w-xl text-left">Rick and Morty é uma série animada de ficção científica e comédia criada por Justin Roiland e Dan Harmon. A história gira em torno de Rick Sanchez, um cientista genial e excêntrico, e seu neto Morty, um adolescente inseguro. Juntos, eles viajam por realidades paralelas e universos bizarros, enfrentando criaturas estranhas, dilemas morais e aventuras caóticas. A série é conhecida pelo seu humor ácido, críticas sociais e reflexões filosóficas sobre a existência, o tempo e a liberdade. Desde sua estreia, conquistou uma base de fãs fiel e se tornou um fenômeno da cultura pop.</p>
            </div>
            <div className='flex RickMorty justify-center'>
                <img src={RickMorty} alt="nome" className='rounded-lg' style={{
                height: '400px', 
                justifyContent: 'center', }}/>
            </div>
        </>
    );
}
export default Abount;