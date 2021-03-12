import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import testimonial from '../images/testimonial-1.png'

export default class Testimonials extends Component {
  render () {
    return (
      <div className='testimonials'>
        <Carousel
          showArrows
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          autoPlay
          interval={6100}
        >
          <div className='container-slides'>
            <img className='img-testimonial' src={testimonial} />
            <div className='myCarousel'>
              <h3>Laura L.</h3>
              {/* <h4>Designer</h4> */}
              <p>
              Ho ordinato un misuratore di pressione Accumed, in meno di due giorni mi è arrivato a casa e mi trovo molto bene!
              </p>
            </div>
          </div>

          <div className='container-slides'>
            <img className='img-testimonial' src={testimonial} />
            <div className='myCarousel'>
              <h3>Daniele P.</h3>
              {/* <h4>Designer</h4> */}
              <p>
              Ho conosciuto questo sito cercando una soluzione per la mia allergia al nichel. Ho comprato due paia di orecchini Blomdahl e adesso non posso più farne a meno.              
              </p>
            </div>
          </div>

          <div className='container-slides'>
            <img className='img-testimonial' src={testimonial} />
            <div className='myCarousel'>
              <h3>Giulia N.</h3>
              {/* <h4>Designer</h4> */}
              <p>
              Sono un cliente da tanto tempo, compro di tutto e mi trovo sempre molto bene. I prodotti sono di ottima qualità e quando mi è capitato di aver bisogno di un aiuto il customer care è sempre stato gentilissimo e velocissimo!              
              </p>
            </div>
          </div>
        </Carousel>
        <style>{`
            .testimonials {
                margin: 0px 80px 80px;
                
            }
     .carousel-root {
       width: 100% !important;
       margin: auto !important;
       margin-top: 3% !important;
      }
     .carousel .slide {
       background: #fff !important;
       color: black;
       height: 100%;
     }
     .carousel .slide img {
       width: 139px !important;
       border-radius: 50%;
     }
     .myCarousel {
       background: #fff;
       margin-top: -6%;
       width: 100%;
       margin-left: auto;
       margin-right: auto;
       padding-top: 6%;
       padding-bottom: 8%;
       padding-left: 5%;
       padding-right: 5%;
       border-radius: 4px;
       border: 2px solid #fafafa;
       height: 350px;
     }

     .carousel .control-dots {
       padding-left: 5px !important;
       outline: 0;
       bottom: 5% !important;
     }

     .myCarousel h3 {
       color: #222;
       font-weight: 100;
       letter-spacing: 0.2px;
       margin-bottom: 4px;
       font-weight: 600;
       text-transform: uppercase;
       font-size: 17px;
     }

     .myCarousel h4 {
       text-transform: uppercase;
       margin-top: 0;
       padding-top: 0;
       font-weight: 500;
       color: #787878;
       font-size: 14px;
     }

     .myCarousel p {
       font-weight: 500 !important;
       line-height: 29px !important;
       color: #777;
       font-family: sans-serif;
       max-height: 67px;

     }

     .myCarousel p:before {
       content: "“";
       color: #8c2b2f;
       font-size: 96px;
       font-weight: 700;
       position: relative;
       top: 35px;
       right: 5px
     }

     .myCarousel p {
         width: 60%;
         margin: 0 auto
     }

     .carousel .control-dots .dot {
       box-shadow: none !important;
       background: #8c2b2f !important;
       outline: 0;
     }

     .carousel.carousel-slider .control-arrow {
       background: #8c2b2f !important;
       height: 50px !important;
       position: absolute;
       top: 50% !important;

     }

     .control-arrow{
       border-radius: 50%;
       width: 50px
     }

     .App {
       text-align: center;
     }

     @media only screen and (max-width: 968px) {

        .testimonials {
                margin: 120px 10px 80px;
                bottom: 20px
            }
       .carousel-root {
         outline: 0;
         width: 100% !important;
         margin: auto !important;
       }

       .carousel.carousel-slider .control-arrow {
         display: none !important;
       }
       .myCarousel {
         margin-top: -9%;
         width: 88%;
         margin-left: auto;
         margin-right: auto;
         padding-top: 8%;
         padding-bottom: 12.5%;
         padding-left: 5%;
         padding-right: 5%;
         border: 2px solid #fafafa;
         border-radius: 4px;
         height: 300px;
       }

       .myCarousel p {
         width: 100%;
        }

       .carousel .slide img {
         width: 24% !important;
         border-radius: 50%;
       }
      
     }
            `}
        </style>
        {/*
        <style jsx='true'>{`
            .testimonials {
                margin: 60px 80px 80px;
            }
     .carousel-root {
       width: 100% !important;
       margin: auto !important;
       margin-top: 3% !important;
      }
      .container-slides {
        background: #fff !important
      }

     .img-testimonial {
       width: 139px !important
     }

     .myCarousel {
       background: #fff;
       margin-top: -6%;
       width: 100%;
       margin-left: auto;
       margin-right: auto;
       padding-top: 6%;
       padding-bottom: 8%;
       padding-left: 5%;
       padding-right: 5%;
       border-radius: 4px;
       border: 2px solid #fafafa;
       height: 350px;
     }

     .carousel .control-dots {
       padding-left: 5px !important;
       outline: 0;
       bottom: 5% !important;
     }

     .myCarousel h3 {
       color: #222;
       font-weight: 100;
       letter-spacing: 0.2px;
       margin-bottom: 4px;
       font-weight: 600;
       text-transform: uppercase;
       font-size: 17px;
     }

     .myCarousel h4 {
       text-transform: uppercase;
       margin-top: 0;
       padding-top: 0;
       font-weight: 500;
       color: #787878;
       font-size: 14px;
     }

     .myCarousel p {
       font-weight: 500 !important;
       line-height: 29px !important;
       color: #777;
       font-family: sans-serif;
       max-height: 67px;

     }

     .myCarousel p:before {
       content: "“";
       color: #8c2b2f;
       font-size: 96px;
       font-weight: 700;
       position: relative;
       top: 35px;
       right: 5px
     }

     .myCarousel p {
         width: 60%;
         margin: 0 auto
     }

     .carousel .control-dots .dot {
       box-shadow: none !important;
       background: #8c2b2f !important;
       outline: 0;
     }

     .carousel.carousel-slider .control-arrow {
       background: #8c2b2f !important;
       height: 50px !important;
       position: absolute;
       top: 50% !important;

     }

     .control-arrow{
       border-radius: 50%;
       width: 50px
     }

     .App {
       text-align: center;
     }

     @media only screen and (max-width: 968px) {

        .testimonials {
                margin: 120px 10px 80px
            }
       .carousel-root {
         outline: 0;
         width: 100% !important;
         margin: auto !important;
       }

       .carousel.carousel-slider .control-arrow {
         display: none !important;
       }
       .myCarousel {
         margin-top: -9%;
         width: 88%;
         margin-left: auto;
         margin-right: auto;
         padding-top: 8%;
         padding-bottom: 12.5%;
         padding-left: 5%;
         padding-right: 5%;
         border: 2px solid #fafafa;
         border-radius: 4px;
         height: 300px;
       }

       .myCarousel p {
         width: 100%;
        }

       .carousel .slide img {
         width: 24% !important;
         border-radius: 50%;
       }
     }
            `}
        </style> */}

      </div>
    )
  }
}
