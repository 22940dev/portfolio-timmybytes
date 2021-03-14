import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Layout from '../components/layout';
import { useAppContext } from '../contexts/AppContext';

const About = () => {
  return (
    <>
      <Head>
        <title>timmybytes</title>
        <meta name='title' content='timmybytes' />
        <meta
          name='description'
          content="Timothy Merritt's developer portfolio and blog"
        />
        <link rel='icon' href='/favicon.ico' />
        {/* Open graph */}
        <meta property='og:title' content='timmybytes' />
        <meta
          property='og:description'
          content="Timothy Merritt's development portfolio and blog"
        />
        <meta property='og:url' content='https://timmybytes.com' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='../public/images/SocialCard.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='647' />
        <meta property='og:image:alt' content='The timmybytes logo' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:image'
          content='../public/images/SocialCard.png'
        />
        <meta property='twitter:creator' content='@timmybytes' />
        {/* <link
          rel='preload'
          href='/fonts/HK-Grotesk/HKGrotesk-Regular.otf'
          as='font'
          crossOrigin=''
        />

        <link
          rel='preload'
          href='/fonts/HK-Grotesk/HKGrotesk-Italic.ttf'
          as='font'
          crossOrigin=''
        /> */}
      </Head>
      <Header />
      <main className='container-gen'>
        <img
          className='img-avatar rotate'
          // src='/images/profile.png'
          src='/images/profile.png'
          alt='Timothy Merritt profile photo'
        />
        <h1 className='header-1 txtthick center'>Hi! I'm Timothy Merritt</h1>
        <h2 className='header-2 txtlower center'>
          a <span className='primary'>developer</span>,{' '}
          <span className='secondary'>designer</span>,{' '}
          <span className='tertiary-more'>writer</span>, and{' '}
          <span className='quaternary'>musician</span>.*
        </h2>
        <p>
          I’m a software developer with a background in design, music, and
          critical analysis. I’m especially passionate about creating for the
          web, where I put my multidisciplinary skills to bear from concept to
          deployment. I enjoy making style guides, designing mock- ups,
          developing and creating websites and web apps, and employing DevOps
          best practices in CI/CD workflows.{' '}
          <Link href='/work'>
            <a>You can see some of my work here, or view my resume.</a>
          </Link>
        </p>
        <p>
          If you’re interested is speaking with me please feel free to send a
          message through my{' '}
          <Link href='/contact'>
            <a>Contact page</a>
          </Link>
          , or connect with me on{' '}
          <a href='https://www.linkedin.com/in/timmybytes'>LinkedIn</a> or{' '}
          <a href='https://twitter.com/timmybytes'>Twitter</a>.
        </p>
        <p>
          <sub>* I'm also pretty good at LEGOs.</sub>
        </p>

        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
      </main>
      <Footer />
    </>
  );
};
export default About;
