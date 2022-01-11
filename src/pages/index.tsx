import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>CEP | Código de Endereçamento Postal</title>
      </Head>

      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="m-5">
            <Image
              src="/logo-cep-dark.png"
              width="350"
              height="150"
              alt="Cep"
            />
          </div>

          <div className="flex flex-row m-5">
            <input
              type="text"
              name="cep"
              placeholder="Informe o cep"
              className="p-3 w-full border-2 border-gray-600 rounded-lg focus:outline-none focus:border-gray-700"
              maxLength={9}
            />

            <button onClick={() => {}}>Pesquisar</button>
          </div>
        </div>
      </div>
    </>
  );
}
