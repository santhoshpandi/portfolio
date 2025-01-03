import Typewriter from "typewriter-effect";

export default function TypeWriter() {

  const title = ['MERN-Stack Developer', 'Fresher', 'Web-Developer','Optimist'];
  return (
    <div className="text-green-500 text-[28px] md:text-[35px] font-typewriter mt-3">

      <Typewriter 
        options={{
          strings: title,
          autoStart: true,
          loop: true,
        }}
      />

    </div>
  );
}
