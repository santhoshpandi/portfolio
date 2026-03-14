export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen  overflow-hidden">

      <div className="relative flex items-center justify-center">

        {/* Pulsar core */}
        <div className="
          w-14 h-14
          rounded-full
          bg-green-300
          shadow-[0_0_25px_rgba(34,197,94,0.9),0_0_60px_rgba(34,197,94,0.6)]
          animate-pulse
          z-10
        "/>

        {/* Beam container (rotates) */}
        <div className="absolute w-60 h-60 animate-spin [animation-duration:1.5s]">

          {/* Beam up */}
          <div className="
            absolute left-1/2 -translate-x-1/2
            w-[2px] h-32
            bg-green-400
            blur-sm
          "/>

          {/* Beam down */}
          <div className="
            absolute left-1/2 -translate-x-1/2 bottom-0
            w-[2px] h-32
            bg-green-400
            blur-sm
          "/>

        </div>

        {/* Gravity ring */}
        <div className="
          absolute
          w-40 h-40
          border border-green-500/20
          rounded-full
          animate-spin
          [animation-duration:6s]
        "/>

      </div>

    </div>
  );
}