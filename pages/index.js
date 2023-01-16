import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to JLK's dev portfolio: pixa sales twitter bot, pixa mint bot, dad jokes nightly texts, what else? ynab daily txt reports? google sheets daily txt reports? what else can you build? make a list of things you have built and things you want to build, this becomes your portfolio." />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
