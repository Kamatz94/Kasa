import BanniereGroup from '../../components/banniereGroup/BanniereGroup'
import Card from '../../components/card/Card'
import './home.css'

function Home() {
    return (
        <main className='home'>
            <BanniereGroup viewType="home"/>
            <Card />
        </main>
    );
}

export default Home;