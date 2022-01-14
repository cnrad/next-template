import type { NextPage } from "next";
import Head from "next/head";
import { GitHubButton } from "../components/GitHubButton";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>cnrad's next.js template</title>
            </Head>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold">
                cnrad's next.js template
                <GitHubButton />
            </div>
        </>
    );
};

export default Home;
