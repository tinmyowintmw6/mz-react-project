import { NextSeo } from 'next-seo'
import Components from 'src/components'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

const NotFound = () => {
  const SEO = {
    title: '404 Not Found',
    openGraph: {
      title: '404 Not Found'
    }
  }
  
  return ( 
    <Components.ResultNotFound>
      <NextSeo {...SEO} />
      <div className="desc">
        {/* <h1 className="title">404</h1>
        <p>Not found</p>
        <p><small>The page you're looking for doesn't exist!</small></p> */}
        <Player
          autoplay
          loop
          src="/404.json"
          className="not-found"
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
      <Components.CustomButton data={{text: 'Back To Home Page', link: '/', color: 'primary', size: 'sm'}} />
    </Components.ResultNotFound>
  );
}
 
export default NotFound;