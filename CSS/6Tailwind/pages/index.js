import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";

export default function Home() {
  return (
    <>
      <head>
        <title>Food Panda</title>
      </head>
      <div className="grid md:grid-cols-3 ">
        <div className="md:col-span-1 md:flex md:justify-end">
          <Navbar />
        </div>
        <div className="px-16 py-6 bg-gray-100 md:col-span-2">
          <Main />
        </div>
      </div>
    </>
  );
}
