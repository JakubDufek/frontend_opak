import Slide from "./slide";

export default function Carousel() {
    return (
        <div className="max-w-screen-xl mt-5">
            <swiper-container slides-per-view="3" space-between="20" navigation="true" pagination="true" breakpints={{768:{slidesPerWiew: 1}}}>
                <swiper-slide><Slide picURL="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/08/Minecraft-wooden-cabin-house-1.jpg" /></swiper-slide>
                <swiper-slide><Slide picURL="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/08/Minecraft-wooden-cabin-house-1.jpg" /></swiper-slide>
                <swiper-slide><Slide picURL="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/08/Minecraft-wooden-cabin-house-1.jpg" /></swiper-slide>
                <swiper-slide><Slide picURL="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/08/Minecraft-wooden-cabin-house-1.jpg" /></swiper-slide>
                <swiper-slide><Slide picURL="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/08/Minecraft-wooden-cabin-house-1.jpg" /></swiper-slide>
            </swiper-container>
        </div>
    );
};
