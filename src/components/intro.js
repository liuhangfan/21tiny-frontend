import designerIMG from './Designer _Flatline.svg';
import MakeUrl from './makeUrl';
export default function Intro() {
    return (
        <section id="Intro">
          <div className="container bg-gray-900 mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-2/3 lg:pr-0 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-7xl mb-4 font-medium text-white">
                Make Your URL
              </h1>
              <p className="text-3xl mb-8 leading-relaxed">
                Customize shorter and more manageable URLs
              </p>
              <MakeUrl/>
            </div>
            {/* https://www.manypixels.co/gallery */}
            <img src={designerIMG} className="img bg-gradient-to-l hover:bg-gradient-to-r" alt="img" />
          </div>
        </section>
      );
}