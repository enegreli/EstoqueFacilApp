import Image from 'next/image';

import HomeImage from '../../public/homePageImage.png';

export default function Home() {
    return (
        <main className="container mx-auto max-h-fit">
            <section className="px-6 py-3 grid md:grid-cols-2 text-center lg:py-6 lg:px-8 grid-cols-1 flex-col">
                <div className="flex items-center justify-center">
                    <span className="font-bold text-raisin-black-700 md:text-xl xl:text-3xl">
                        O melhor jeito <br /> para{' '}
                        <span className="text-hunter-green">controlar</span> seu
                        estoque
                    </span>
                </div>
                <div className="flex items-center justify-center relative">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#92C8AD"
                            d="M40.7,-64.6C52.1,-56,60.3,-43.6,64.7,-30.6C69,-17.5,69.5,-3.7,66.7,8.9C63.9,21.6,57.7,33.1,50.1,45.4C42.5,57.6,33.5,70.7,20.7,77.7C7.9,84.8,-8.8,85.8,-22.3,80C-35.8,74.2,-46.2,61.6,-55.9,49.2C-65.7,36.7,-74.7,24.4,-78.4,10.2C-82.1,-3.9,-80.4,-19.9,-74.6,-34.7C-68.9,-49.6,-59.1,-63.2,-46,-71.1C-32.9,-79,-16.5,-81.2,-0.9,-79.7C14.6,-78.3,29.3,-73.3,40.7,-64.6Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                    <Image
                        src={HomeImage}
                        priority
                        quality={100}
                        alt="Imagem home page"
                        className="absolute"
                    />
                </div>
            </section>
        </main>
    );
}
