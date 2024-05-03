import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sonuclar = [
  {
    dersAdı: "Türkçe",
    soruSayısı: 40,
    doğru: 21,
    yanlış: 3,
    bos: 16,
    net: 20,
  },
  {
    dersAdı: "Tarih",
    soruSayısı: 5,
    doğru: 4,
    yanlış: 1,
    bos: 0,
    net: 3.75,
  },
  {
    dersAdı: "Coğrafya",
    soruSayısı: 5,
    doğru: 4,
    yanlış: 1,
    bos: 0,
    net: 3.75,
  },
  {
    dersAdı: "Felsefe",
    soruSayısı: 5,
    doğru: 4,
    yanlış: 1,
    bos: 0,
    net: 3.75,
  },
  {
    dersAdı: "Din Kültürü ve Ahlak Bilgisi",
    soruSayısı: 5,
    doğru: 4,
    yanlış: 1,
    bos: 0,
    net: 3.75,
  },
  {
    dersAdı: "Felsefe (2)",
    soruSayısı: 5,
    doğru: 4,
    yanlış: 1,
    bos: 0,
    net: 3.75,
  },
  {
    dersAdı: "Temel Matematik",
    soruSayısı: 40,
    doğru: 21,
    yanlış: 3,
    bos: 16,
    net: 20,
  },
  {
    dersAdı: "Fizik",
    soruSayısı: 7,
    doğru: 6,
    yanlış: 1,
    bos: 9,
    net: 5.75,
  },
  {
    dersAdı: "Kimya",
    soruSayısı: 7,
    doğru: 6,
    yanlış: 1,
    bos: 9,
    net: 5.75,
  },
  {
    dersAdı: "Biyoloji",
    soruSayısı: 6,
    doğru: 5,
    yanlış: 1,
    bos: 0,
    net: 4.75,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 ">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h1 className="font-extrabold sm:text-4xl text-xl">FEN BİLİMLERİ KOLEJİ</h1>
        <h6 className="sm:text-2xl text-lg font-medium">Bursluluk Sonuç Sistemi</h6>
      </div>

      <div className="justify-center items-center flex flex-col mt-20 gap-y-20">
        <div className="flex flex-row justify-center items-center gap-x-5">
          <Avatar className="w-24 h-24 rounded-xl">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-start space-y-1">
            <h1 className="font-extrabold text-3xl">Çağatay Nalcı</h1>
            <h6 className="font-semibold">6. SINIF</h6>
            <h6 className="text-sm font-medium">03/10/2006</h6>
          </div>
        </div>

        <div className="flex space-y-10 flex-col justify-center items-center">
         

          <div className="flex flex-col space-y-4 w-full px-8">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col items-center justify-center p-2 bg-green-500 rounded-lg text-white">
                <h1 className="text-center">Toplam Doğru</h1>
                <h2 className="text-center font-bold">100</h2>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-red-500 rounded-lg text-white">
                <h1 className="text-center">Toplam Yanlış</h1>
                <h2 className="text-center font-bold">100</h2>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-zinc-400 rounded-lg text-white">
                <h1 className="text-center">Toplam Boş</h1>
                <h2 className="text-center font-bold">100</h2>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-blue-500 rounded-lg text-white">
                <h1 className="text-center">Toplam Net</h1>
                <h2 className="text-center font-bold">100</h2>
              </div>
            </div>
            <div className="w-full bg-zinc-200 rounded-md p-2 flex flex-col items-center justify-center">
              <h1 className="text-2xl">Puanı</h1>
              <h2 className="text-2xl font-bold">400,23</h2>
            </div>
          </div>

          <div className="w-full">
            <Table>
              <TableCaption>
                20/06/2024 Tarihli bursluluk sınavı sonuçları
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-xs sm:text-sm">Dersler</TableHead>
                  <TableHead className="font-bold text-xs sm:text-sm">SS</TableHead>
                  <TableHead className="font-bold text-xs sm:text-sm">Doğru</TableHead>
                  <TableHead className="font-bold text-xs sm:text-sm">Yanlış</TableHead>
                  <TableHead className="font-bold text-xs sm:text-sm">Boş</TableHead>
                  <TableHead className="font-bold text-xs sm:text-sm">Net</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sonuclar.map((ders, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-bold">{ders.dersAdı}</TableCell>
                    <TableCell className="text-center text-xs sm:text-sm">{ders.soruSayısı}</TableCell>
                    <TableCell className="text-center text-xs sm:text-sm">{ders.doğru}</TableCell>
                    <TableCell className="text-center text-xs sm:text-sm">{ders.yanlış}</TableCell>
                    <TableCell className="text-center text-xs sm:text-sm">{ders.bos}</TableCell>
                    <TableCell className="text-center text-xs sm:text-sm">{ders.net}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
      </div>
    </main>
  );
}
