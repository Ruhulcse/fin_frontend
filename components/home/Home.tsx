import Measurements from './Measurements';
import Steps from './Steps';
import Todos from './Todos';

const Home = () => {
	return (
		<section className="home">
			<Measurements />
			<Steps />
			<Todos />
		</section>
	);
};

export default Home;
