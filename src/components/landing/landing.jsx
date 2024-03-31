import * as React from "react";
import Header from './../header/header';

// const imageGallery = [
//   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/20463ea4f9e0d7ae4a586411c6c9a44dafa5c24f256c21e5d4c30931edc828e2?apiKey=807ecef27bf2490c882cc6ddc3e561c4&", alt: "" },
//   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cff72066e8c1806725eac1c29dd4c4b2a57115eadf73fb8383938dc01a9ef751?apiKey=807ecef27bf2490c882cc6ddc3e561c4&", alt: "" },
//   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2afb4c0477a23844bb61fa0cc497a759dd829d17a56e3ed2a3de618e420dabbc?apiKey=807ecef27bf2490c882cc6ddc3e561c4&", alt: "" },
//   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98adf7a43b83132f0a57a002d4464e605fbcea87a991bd1717ded4aacfcea780?apiKey=807ecef27bf2490c882cc6ddc3e561c4&", alt: "" },
// ];

// const Hero = () => (
//   <section className="hero">
//     <div className="hero-content">
//       <h1 className="hero-title">Conoce y conecta</h1>
//       <p className="hero-description">
//         Busca el grupo o selección que más se adapte a ti y postulate
//       </p>
//       <div className="hero-actions">
//         <button className="search-button">
//           Buscar Grupo
//         </button>
//       </div>
//     </div>
//     <div className="hero-images">
//       {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d270c937e8b17e1f33a37a1210f6f75f2dbb9abf82a65b281b6ccf37f67e60b1?apiKey=807ecef27bf2490c882cc6ddc3e561c4&" alt="" className="hero-image" /> */}
//       {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/61b1ff38af86ae6cf38c36a18f788166fe19100075b892ec84152bb37b1ff782?apiKey=807ecef27bf2490c882cc6ddc3e561c4&" alt="" className="hero-image" /> */}
//       {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b63dddf9bf7a8cff54f25c07dc73ec62d330104ed583775f8f71b350e120be9f?apiKey=807ecef27bf2490c882cc6ddc3e561c4&" alt="" className="hero-image" /> */}
//     </div>
//   </section>
// );

// const ImageGallery = () => (
//   <section className="image-gallery">
//     {imageGallery.map((image, index) => (
//       <img
//         key={index}
//         src={image.src}
//         alt={image.alt}
//         className="gallery-image"
//       />
//     ))}
//   </section>
// );

// const AboutSection = () => (
  // <section className="about-section" content="width=device-width, initial-scale=1.0">
  //   <p className="about-description">
  //     Esta App nace en vista a la dificultad que posee la Universidad
  //     Metropolitana para promocionar actividades extracurriculares debido a sus
  //     métodos de difusión limitados y falta de accesibilidad a la información,
  //     lo que impide la captación efectiva de nuevos estudiantes para estas
  //     actividades.
  //   </p>
  // </section>
// );

// const MisionVision = () => (
//   <section className="mision-vision">
//     {misionVision.map((item, index) => (
//       <div key={index} className="mision-vision-item">
//         <h2 className="mision-vision-title">{item.title}</h2>
//         <p className="mision-vision-description">{item.description}</p>
//       </div>
//     ))}
//     <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7086674befce8d41070993f849447741a1e88f536c892c12f68abd95715c8fc9?apiKey=807ecef27bf2490c882cc6ddc3e561c4&" alt="" className="mision-vision-separator" />
//   </section>
// );

export default function Landing() {
  return (
    <>
      <Header></Header>
      <div className='landing'>
        <div>mmalo</div>
      </div>      
    </>
)
}