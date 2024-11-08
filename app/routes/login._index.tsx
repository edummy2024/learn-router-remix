import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
import TitleFB from "~/components/title-fb";

export default function LoginIndexRoute() {
  return (
    <>
      <main className="h-[75vh] bg-gray-100 flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <TitleFB className="text-5xl text-center" />
          <div className="w-[396px]">
            <div className="w-full shadow-md my-4 bg-white rounded-lg flex flex-col gap-5 px-4 py-6">
              <h2 className="text-center text-xl">Login ke Facebook</h2>
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

                <button
                  type="button"
                  className="w-full p-3 rounded-md text-white font-bold bg-blue-600 hover:bg-blue-500">Masuk</button>
              </form>

              <Link to={"identify"} className="w-fit mx-auto text-blue-600 hover:text-blue-500">Lupa Akun?</Link>

                <hr />
            <Link
              to={"/register"}
              role="button"
              className=" w-fit  mx-auto py-3 px-5 rounded-md text-white font-bold bg-green-500 hover:bg-green-600">Buat akun baru</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
