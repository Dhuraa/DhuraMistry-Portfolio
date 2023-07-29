import AboutImage from '../../assets/about_image.png'

const About = () => {
  return (
    <div className="bg-white p-10">
      <section className="flex p-10 ">
        <div>
          <img src={AboutImage}></img>
        </div>
        <div className='text-slate-900 pl-10'>
          <h1 className='text-5xl font-bold'>I'm Dhura</h1>
          <h2>A Software Developer</h2>
        </div>
      </section>
    </div>
  );
};
export default About;
