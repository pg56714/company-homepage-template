import { About, Contact, Hero, Layout, Partners, Skills } from "@/containers";

import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Hero />
				<About />
				<Skills />
				<Partners />
				<Contact />
			</Layout>
		</>
	);
};

export default Home;
