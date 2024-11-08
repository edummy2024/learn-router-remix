import { Link } from "@remix-run/react";
import Footer from "~/components/footer";
import TitleFB from "~/components/title-fb";

export default function RegisterRoute() {
  return (
    <>
      <main className="h-screen bg-gray-100 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-8 mb-10">
          <TitleFB className="text-6xl text-center" />
          <div className="w-[432px] rounded-md bg-white shadow-lg">
            <div role="header" className="py-3 border-b">
              <h2 className="font-semibold text-center text-2xl leading-10">Buat Akun Baru</h2>
              <span className="block text-center text-gray-400 text-sm">Ini cepat dan mudah.</span>
            </div>

            <div className="p-4">
              <form className="flex flex-col gap-4">
                <section className="grid grid-cols-2 gap-4">
                  <input type="text" className="p-2 rounded-md border" placeholder="Nama Depan" />
                  <input type="text" className="p-2 rounded-md border" placeholder="Nama Belakang" />
                </section>

                <fieldset className="flex flex-col gap-1">
                  <label className="text-gray-600 text-xs">Tanggal Lahir</label>
                  <section className="grid grid-cols-3 gap-4">
                    <select className="p-2 rounded-md border" >
                      {listDate.map((date) => <option key={date} value={date}>{date}</option>)}
                    </select>
                    <select className="p-2 rounded-md border" >
                      {listMonth.map((month) => <option key={month} value={month}>{month}</option>)}
                    </select>
                    <select className="p-2 rounded-md border" >
                      {listYear.map((year) => <option key={year} value={year}>{year}</option>)}
                    </select>
                  </section>
                </fieldset>

                <fieldset className="flex flex-col gap-1">
                  <label className="text-gray-600 text-xs">Jenis Kelamin</label>
                  <section className="grid grid-cols-3 gap-4">
                    <label htmlFor="Perempuan" className="text-xs w-full p-2 py-3 rounded-md border flex items-center justify-between">Perempuan
                      <input id="Perempuan" type="radio" name="gender" value={"Perempuan"} />
                    </label>

                    <label htmlFor="Laki-Laki" className="text-xs w-full p-2 py-3 rounded-md border flex items-center justify-between">Laki-Laki
                      <input id="Laki-Laki" type="radio" name="gender" value={"Laki-Laki"} />
                    </label>

                    <label htmlFor="Khusus" className="text-xs w-full p-2 py-3 rounded-md border flex items-center justify-between">Khusus
                      <input id="Khusus" type="radio" name="gender" value={"Khusus"} />
                    </label>
                  </section>
                </fieldset>

                <input type="text" className="p-2 rounded-md border" placeholder="Nomor seluler atau email" />
                <input type="text" className="p-2 rounded-md border" placeholder="Kata sandi baru" />

                <p className="text-xs text-gray-500 font-light">
                  Orang yang menggunakan layanan kami dapat mengunggah informasi kontak Anda ke Facebook.Pelajari selengkapnya
                </p>

                <p className="text-xs text-gray-500 font-light">Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami. Anda akan menerima Notifikasi SMS dari kami dan bisa berhenti kapan saja.</p>

                <button
                  className="mx-auto w-2/4 py-1.5 rounded-md text-white font-bold bg-green-600 hover:bg-green-700 text-xl">Daftar</button>

                  <Link to={"/login"} className="mx-auto inline-block text-lg text-blue-600 hover:text-blue-700">Sudah memiliki akun?</Link>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const listDate = Array.from({ length: 31 }).fill(null)
  .map((_, index) => index + 1);

const listMonth = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sept", "Okt", "Nov", "Des",
];

const date = new Date();
const year = date.getFullYear();
const initYear = 1905;

const listYear = Array.from({ length: (year - 1905 + 1) }).fill(null)
  .map((_, index) => initYear + index).sort((a, b) => b - a);
