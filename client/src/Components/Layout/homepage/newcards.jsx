// import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "./CardItem";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import myimg from "./Img2.jpeg";


export default function NewCards() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div style={{width:"100vw"}}> 
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      itemClass="carousel-item-padding-60-px"
      
    >
    
      <div
        style={{
          width: "100vw",
          marginLeft: "auto",
          marginRight: "auto",
          height: "300px",
          backgroundColor: "white"
        }}
      >
        <div style={{width:"60%" , marginLeft:"auto" , marginRight:"auto" , textAlign:"center"}}>

        <img src={myimg} style={{width:"200px" , borderRadius:"5px"}}></img><br></br>
        Jayesh Shimpi <br></br>
        <a href="https://www.linkedin.com/in/jayeshshimpi1109"><LinkedInIcon/></a>
        <a href="https://github.com/jayeshshimpi110920"><GitHubIcon/></a>
      
        
        </div>
      </div>
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "300px",
          backgroundColor: "white"
        }}
      >
        <div style={{width:"60%" , marginLeft:"auto" , marginRight:"auto" , textAlign:"center"}}>

      {/* <img src={myimg} style={{width:"200px" , borderRadius:"5px"}}></img><br></br> */}
      Naman Jain <br></br>
      <a href="#"><LinkedInIcon/></a>
      <a href="https://github.com/gitnamanjain"><GitHubIcon/></a>
    
      
      </div>
      </div>
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "300px",
          backgroundColor: "white"
        }}
      >
        <div style={{width:"60%" , marginLeft:"auto" , marginRight:"auto" , textAlign:"center"}}>
        {/* <img src={myimg} style={{width:"200px" , borderRadius:"5px"}}></img><br></br> */}
        Prachi Sachdeva<br></br>
        <a href="https://www.linkedin.com/in/prachi-sachdeva17"><LinkedInIcon/></a>
        <a href="https://github.com/prachi171"><GitHubIcon/></a>
      
        
        </div>
        
      </div>
    </Carousel>
    </div>
  );
}
