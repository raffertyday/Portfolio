import ImageSlideshow from "@/components/images/image-slide";
import classes from '../components/images/image-slide.module.css'
import Card from "@/components/content-card";
import Card2 from "@/components/content-card2";



export default function Home() {

  return (
    <div className="container">
      <h1>WELCOME TO MY PORTFOLIO!</h1>
      <div className="img-container">
      <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        </div>
        <Card />
        <Card2 />
    </div>
  );
}

