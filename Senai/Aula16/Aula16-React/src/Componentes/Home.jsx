import Logo from '../Imagens/Nome.png'
import '../api.css'

function Home(){
    return(
        <>
        <div className='logo'>
          <img src={Logo} alt="nome" style={{
            height: '300px', 
            justifyContent: 'center', }}/>
        </div>
        </>
    );
}
export default Home;
