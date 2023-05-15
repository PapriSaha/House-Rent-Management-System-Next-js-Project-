import Head from "next/head";
import Image from 'next/image';

export default function MyHeader(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="home.svg" />
      </Head>
      <header className="py-4 px-6 bg-white shadow">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
            </div>
            {/* Add your additional navigation or content here */}
          </nav>
        </div>
      </header>
    </>
  );
}

