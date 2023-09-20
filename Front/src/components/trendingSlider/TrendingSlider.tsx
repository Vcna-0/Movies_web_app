import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "@/components/card/Card";
import { MovieResult, TvResult } from '@/type';
import { FreeMode } from 'swiper/modules';
import { type } from 'os';

register();

type Props = {
    searchResults: Array<MovieResult | TvResult>;
}

export default function TrendingSlider({searchResults}: Props) {


  return (
    <div>
      <h2>Trending</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
      >
        {searchResults.map((result) => (
            <SwiperSlide>
                <Card key={result.id} result={result} />
            </SwiperSlide>
		))}
      </Swiper>
    </div>
  )
}
