import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useId } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function handleSubmit(e) {
    //Evita o recarregamento da página quando o form é enviado.
    e.preventDefault();

    //Lê e manipula os dados do form.
    const form = e.target;
    const formData = new FormData(form);

    //Envia os dados para uma API
    fetch('/endereco-da-API', { method: form.method, body: formData });

    //Transforma os dados do form em JSON
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  const pesquisaTextAreaId = useId();

  return (
    <>
      <Head>
        <title>Procuritiba</title>
        <meta name="description" content="Encontre o rolê ideal para você!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-items-container">
          <label htmlFor={pesquisaTextAreaId}>
            Quais os requisitos para o rolê de hoje?
          </label>
          <textarea
            id={pesquisaTextAreaId}
            name="userRoleDetails"
            rows={4}
            cols={40}
          />      
          
          <button type="submit">pesquisar</button>
        </div>
      </form>
    </>
  )
}
