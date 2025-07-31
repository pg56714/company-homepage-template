import type { NextPage } from "next";
import { About, Contact, Hero, Layout, Partners, Skills } from "@/containers";

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<Partners />
			<Contact />
		</Layout>
	);
};

export default Home;
