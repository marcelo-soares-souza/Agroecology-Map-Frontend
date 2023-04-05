import Translator from "../components/i18n/Translator";
import PageContent from "../components/PageContent";

const Home = () => {
  return (
    <PageContent>
      <p>
        <Translator path="home.about" />
      </p>
    </PageContent>
  );
};

export default Home;
