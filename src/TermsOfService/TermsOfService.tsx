import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const sections = [
  {
    title: "1. Lorem Ipsum Dolor Sit",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    title: "2. Consectetur Adipiscing Elit",
    content: [
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.",
    ],
  },
  {
    title: "3. Pellentesque Habitant Morbi",
    content: [
      "Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Nulla vitae elit libero:",
    ],
    list: [
      "Aenean lacinia bibendum nulla sed consectetur",
      "Vestibulum id ligula porta felis euismod semper",
      "Donec ullamcorper nulla non metus auctor fringilla",
      "Cras mattis consectetur purus sit amet fermentum",
      "Nullam quis risus eget urna mollis ornare vel eu leo",
    ],
    footer:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    title: "4. Maecenas Sed Diam",
    content: [
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam:",
    ],
    list: [
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor",
      "Morbi leo risus porta ac consectetur ac vestibulum at eros",
      "Praesent commodo cursus magna vel scelerisque nisl consectetur et",
      "Cras justo odio dapibus ut facilisis in egestas eget quam",
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet",
    ],
  },
  {
    title: "5. Donec Ullamcorper Nulla",
    content: [
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    ],
  },
  {
    title: "6. Cras Mattis Consectetur",
    content: [
      "Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna:",
    ],
    list: [
      "Pellentesque habitant morbi tristique senectus et netus",
      "Maecenas faucibus mollis interdum nascetur ridiculus mus",
      "Duis mollis est non commodo luctus nisi erat porttitor",
      "Donec sed odio dui cras justo odio dapibus",
      "Etiam porta sem malesuada magna mollis euismod",
      "Aenean eu leo quam pellentesque ornare sem lacinia",
      "Fusce dapibus tellus ac cursus commodo tortor mauris",
    ],
  },
  {
    title: "7. Aenean Lacinia Bibendum",
    content: [
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    ],
  },
  {
    title: "8. Vestibulum Id Ligula",
    content: [
      "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur:",
    ],
    list: [
      "Nullam quis risus eget urna mollis ornare vel eu leo",
      "Maecenas sed diam eget risus varius blandit sit amet",
      "Vivamus sagittis lacus vel augue laoreet rutrum",
      "Cras mattis consectetur purus sit amet fermentum",
    ],
  },
  {
    title: "9. Fusce Dapibus Tellus",
    content: [
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.",
    ],
    list: [
      "Pellentesque ornare sem lacinia quam venenatis vestibulum",
      "Donec ullamcorper nulla non metus auctor fringilla",
      "Etiam porta sem malesuada magna mollis euismod",
    ],
  },
  {
    title: "10. Nullam Quis Risus",
    content: ["Praesent commodo cursus magna vel scelerisque nisl:"],
    list: [
      "Aenean lacinia bibendum nulla sed consectetur",
      "Vestibulum id ligula porta felis euismod semper",
      "Duis mollis est non commodo luctus nisi erat",
      "Cras justo odio dapibus ut facilisis in egestas",
      "Fusce dapibus tellus ac cursus commodo tortor mauris",
    ],
  },
  {
    title: "11. Morbi Leo Risus",
    content: [
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.",
    ],
  },
  {
    title: "12. Integer Posuere Erat",
    content: [
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      "Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.",
    ],
  },
  {
    title: "13. Duis Mollis Est Non",
    content: [
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.",
    ],
  },
  {
    title: "14. Etiam Porta Sem",
    content: [
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    ],
  },
  {
    title: "15. Cras Justo Odio",
    content: [
      "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    ],
  },
  {
    title: "16. Vivamus Sagittis Lacus",
    content: [
      "Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper:",
    ],
  },
];

function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b bg-muted/30 py-20 px-4">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Legal
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last Updated: March 1, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="rounded-2xl border bg-muted/20 p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                    {section.list.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfService;
