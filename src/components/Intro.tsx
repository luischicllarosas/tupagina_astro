import BlurFade from "@/components/ui/blur-fade";
import WaveReveal from "./animate/text/wave-reveal";
import TextFlip from "./animate/text/text-flip";

export default function BlurFadeTextDemo() {
  return (
    <section className="content-center">
      <WaveReveal text="Realza tu imagen" />
      <div className="justify-items-center pt-5">
        <TextFlip text="Ayudamos a nuestros clientes a crear" />
      </div>
    </section>
  );
}
