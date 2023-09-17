import React, { useRef } from "react";
import TestimonialCard from "./Components/TestimonialCard";
import { testimonials } from "../../../data/Testimonials";
import arrow from "../../../data/assets/png/arrow.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useInView } from "framer-motion";

const Testimonials = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateY(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
			name="testimonials" className="relative py-28">
			<div className="absolute top-0 w-full h-full -z-20 bg-homeBg"></div>
			<div className="absolute top-0 w-full h-full bg-gradient-to-t from-white via-white/95 to-white -z-10"></div>

			<div className="flex flex-col items-center mx-auto">
				<h2 className="text-4xl font-bold heading">Testimonial</h2>
				<p className="text-center">
					Discover Feedback from{" "}
					<span className="px-1 font-semibold bg-green-100 rounded-lg">
						Clients
					</span>{" "}
					and{" "}
					<span className="px-1 font-semibold rounded-lg bg-sky-100">
						Colleagues
					</span>{" "}
				</p>
			</div>


			<Swiper
				slidesPerView={1}
				centeredSlides={true}
				spaceBetween={20}
				breakpoints={{
					1440: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1536: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true
				}}
				loop={true}
				modules={[Autoplay, Pagination]}
				className="flex w-full my-10 mySwiper h-96"
			>
				{testimonials.map((testimonial, key) => {
					return (
						<SwiperSlide key={key} className="h-full pb-10 ">
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					)
				})}

			</Swiper>

			{/* <Marquee
				autoFill={true}
				gradient={screen.width >= 768 && true}
				pauseOnClick={true}
				className="my-10"
			>
				{testimonials.map((testimonial, key) => {
					return <TestimonialCard key={key} testimonial={testimonial} />;
				})}
			</Marquee> */}

			<div className="absolute flex-col items-center hidden xl:flex left-20 top-24 -rotate-12 text-slate-400">
				<p>
					{"<"}Hold to read {"/>"}
				</p>

				<img
					className="w-20 ml-10 opacity-20 rotate-[46deg] my-5"
					src={arrow}
					alt="arrow vector"
				/>
			</div>
		</section>
	);
};

export default Testimonials;
