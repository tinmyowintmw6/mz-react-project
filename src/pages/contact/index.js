import { NextSeo } from 'next-seo'

export default function Contact() {
  const SEO = {
    title: 'Contact Us',
    openGraph: {
      title: 'Contact Us'
    }
  }
  
  return (
    <div>
      <NextSeo {...SEO} />
      <h1>Contact</h1>
    </div>
  )
}