import Tenma from '../assets/tenma.png';

const Home = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>Kenzo Tenma</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={Tenma} alt="Kenzo Tenma" className='img' style={{ maxWidth: '70%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Home;







