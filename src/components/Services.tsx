import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviewsLeft = [
  {
    title: "Desarrollo Web",
    body: "Múltiples ideas creativas para paginas web que impacten a tus clientes.",
    img: "icons/services/0.png",
  },
  {
    title: "Progressive Web App",
    body: "Aplicaciones o Webs que funcionen offline, tanto en web y movil.",
    img: "icons/services/1.png",
  },
];
const reviewsRight = [
  {
    title: "Aplicaciones Web",
    body: "Diseño de soluciones complejas que requieren un múltiples procedimientos.",
    img: "icons/services/2.png",
  },
  {
    title: "Soluciones Innovadoras",
    body: "Ideas nuevas fáciles de mantener y entender, con un objetivo claro.",
    img: "icons/services/3.png",
  },
];

const firstRow = reviewsLeft.slice(0, reviewsLeft.length / 1);
const lastRow = reviewsRight.slice(0, reviewsRight.length / 1);

const ReviewCard = ({
  img,
  title,
  body,
}: {
  img: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative card cursor-pointer overflow-hidden rounded-xl p-4",
        " hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="icon" alt="" src={img} />
        <figcaption className="text-2xl font-medium">{title}</figcaption>
      </div>
      <blockquote className="mt-2 text-lg">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <section className="grid grid-flow-row gap-5">
      <div className="text-secondary karla font-light">
        NUESTRA ESPECIALIDAD
      </div>

      <div className="lg:text-5xl">
        <span className="font-semibold">Servicios</span> Destacados
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg gap-5">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {lastRow.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
