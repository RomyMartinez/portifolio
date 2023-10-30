import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade } from "swiper/modules"

function App() {
  const data = [
    { id: 1, image: "../img/projetos/image1.png", title: "Imagem 1" },
    { id: 2, image: "../img/projetos/image2.png", title: "imagem 2" },
    { id: 3, image: "../img/projetos/image3.png", title: "Imagem 3" },
  ]
  return (
    <div>
      <Swiper
        slidesPerView={1}
        navigation={{ clickable: true }}
        loop={true}
        modules={[EffectFade]}
        effect="coverflow"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.image} className="slide-item" />{" "}
            <h3>{item.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default App
