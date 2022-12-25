import LinkIcon from '@mui/icons-material/Link';
export default function Intro() {
    return (
        <section id="intro">
          <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Make Your URL 👋👋👋
              </h1>
              <p className="mb-8 leading-relaxed">
              Customize shorter and more manageable URLs
              </p>
            </div>
          </div>
        </section>
      );
}