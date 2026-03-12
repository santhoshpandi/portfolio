import Typewriter from "typewriter-effect";
import data from "../../data/data.json";

export default function TypeWriter() {


  return (
    <div className="text-green-500 text-[28px] md:text-[35px] font-typewriter mt-3">

      <Typewriter 
        options={{
          strings: data.roles,
          autoStart: true,
          loop: true,
        }}
      />

    </div>
  );
}
