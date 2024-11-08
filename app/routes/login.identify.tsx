import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
import TitleFB from "~/components/title-fb";

export default function LoginIdentifyRoute() {
  return (
    <>
      <header className="h-14 bg-white grid place-items-center px-4 shadow-lg">
        <div className=" w-full flex justify-between items-center">
            <TitleFB className="text-3xl"/>
          
            <form className="flex gap-3 items-center">
              <input 
                type="text" 
                placeholder="Email atau Telepon"
                className="w-48 hidden border p-2 rounded-md lg:inline-block"/>
              <input 
                type="text" 
                placeholder="Kata Sandi"
                className="w-48 hidden border p-2 rounded-md lg:inline-block"/>
              <button
                  type="button"
                  className="hidden p-2.5 text-sm rounded-md text-white font-bold bg-blue-600 hover:bg-blue-500 lg:inline-block">Masuk</button>

              <Link to={"/login"}
                  role="button"
                  className="p-2.5 text-sm rounded-md text-white font-bold bg-blue-600 hover:bg-blue-500 lg:hidden">Masuk</Link>
              <Link to={'/login/identify'} target="_blank" className="hidden text-blue-600 hover:text-blue-500 hover:underline lg:inline-block">Lupa Akun?</Link>
            </form>
        </div>
      </header>
      <main className="h-[75vh] bg-gray-100 flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <div className="w-[500px]">
            <div className="w-full shadow-md bg-white rounded-lg flex flex-col gap-4 px-4 py-6">
              <h1 className="font-bold text-xl">Temukan ke Facebook</h1>
              <hr />
              <p className="w-11/12">Masukkan email atau nomor ponsel Anda untuk mencari akun Anda.</p>
              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Email atau Nomor Telepon"
                  className="block border w-full p-3 rounded-md"
                  autoFocus
                />
                <hr />

                <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  className="p-2.5 text-sm rounded-md text-gray-600 font-bold bg-gray-200 hover:bg-gray-300">Cancel</button>

                <button
                  type="button"
                  className="py-2.5 px-6 text-sm rounded-md text-white font-bold bg-blue-600 hover:bg-blue-500">Cari</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
