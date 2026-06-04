import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const currently = [
  {
    label: "Shipping",
    value: "Real-time job listings pipeline for Ilitch companies",
  },
  {
    label: "Studying",
    value: "MS Computer Science at Johns Hopkins — entering my third semester",
  },
  {
    label: "Thinking about",
    value:
      "What it means to build software when the model can write the first draft",
  },
  {
    label: "Excited by",
    value: "Teams building at the intersection of AI and developer tooling",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-10">
              <p className="text-primary text-sm font-medium mb-2 tracking-widest uppercase">
                About
              </p>
              <h2 className="text-4xl font-bold text-foreground">
                A bit about me
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                The thing I find most interesting about software isn't the tech
                stack — it's figuring out why a system works the way it does,
                and what it would take to make it meaningfully better.
              </p>
              <p>
                I've owned features end to end: React and TypeScript on the
                front, C# on the back, Azure Functions for the async work. I've
                set up pipelines, written the tests, and pushed back in code
                review when something was more complicated than it needed to be.
              </p>
              <p>
                Teaching data structures at MSU taught me how to explain hard
                things clearly. That turns out to be one of the most useful
                skills I have.
              </p>
              <p>
                I'm at Johns Hopkins now because I want to go deeper — on the
                theory, on the systems, and especially on understanding what AI
                models actually change about how software gets built.
              </p>
            </div>
          </div>

          <div className="lg:pt-20">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/50 mb-4">
              Currently
            </p>
            <Accordion
              type="multiple"
              defaultValue={["item-0", "item-1"]}
              className="w-full"
            >
              {currently.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-sm text-primary/70 font-medium hover:text-primary hover:no-underline py-3">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground pb-4">
                    {item.value}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
