import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
import TitleFB from "~/components/title-fb";

export default function Index() {
  return (
    <>
      <main className="h-screen bg-gray-100 flex justify-center items-center flex-col lg:flex-row lg:items-start lg:gap-16 lg:pt-28">
        <Header />
        <div className="w-[396px]">
          <div className="w-full shadow-md my-4 bg-white rounded-lg flex flex-col gap-4 p-4">
            <form>
              <input
                type="text"
                placeholder="Email atau Nomor Telepon"
                className="block border w-full p-3 rounded-md"
                autoFocus
              />
              <input
                type="text"
                placeholder="Kata Sandi"
                className="block border w-full p-3 rounded-md my-4"
              />

              <Link to={"login"}>
                <button
                  type="button"
                  className="w-full p-3 rounded-md text-white font-bold bg-blue-600 hover:bg-blue-500">
                    Masuk</button>
              </Link>
            </form>

            <Link to={"."} className="w-fit mx-auto text-blue-600 hover:text-blue-500">Lupa kata sandi?</Link>

            <hr />
            <Link
              to={"/register"}
              role="button"
              className=" w-fit  mx-auto py-3 px-5 my-3 rounded-md text-white font-bold bg-green-500 hover:bg-green-600">Buat akun baru</Link>
          </div>

          <p className="text-center text-sm"><b>Buat Halaman</b> untuk seleberiti, merek, atau bisnis</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return <div className="text-center lg:text-left w-[396px] lg:w-[500px] lg:h-[396px] lg:my-auto">
    <TitleFB />
    <p className="leading-7 text-2xl my-4 break-words">Facebook membantu Anda Terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</p>
  </div>
}


