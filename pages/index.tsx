import { NextPage } from 'next';
import Layout from '../layout';
import Header from '../components/person-header';
import Main from '../components/person-main';

const Home: NextPage = () => <Layout header={<Header />} main={<Main />} />;

export default Home;
