import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const sections = [
  {
    title: "1. Lorem Ipsum Dolor",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam:",
    ],
    list: [
      "Pellentesque habitant morbi tristique senectus et netus",
      "Maecenas sed diam eget risus varius blandit sit amet",
      "Donec ullamcorper nulla non metus auctor fringilla",
      "Vestibulum id ligula porta felis euismod semper",
      "Cras mattis consectetur purus sit amet fermentum",
    ],
  },
  {
    title: "2. Consectetur Adipiscing",
    content: [
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor:",
    ],
    list: [
      "Aenean lacinia bibendum nulla sed consectetur",
      "Nullam quis risus eget urna mollis ornare vel eu leo",
      "Fusce dapibus tellus ac cursus commodo",
      "Cras justo odio dapibus ac facilisis in egestas",
      "Integer posuere erat a ante venenatis dapibus",
      "Morbi leo risus porta ac consectetur ac vestibulum",
    ],
  },
  {
    title: "3. Sed Do Eiusmod Tempor",
    content: [
      "Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue:",
    ],
    list: [
      "Cum sociis natoque penatibus et magnis dis parturient montes",
      "Maecenas faucibus mollis interdum nascetur ridiculus mus",
      "Duis mollis est non commodo luctus nisi erat porttitor",
      "Cras mattis consectetur purus sit amet fermentum aenean",
    ],
  },
  {
    title: "4. Ut Labore Et Dolore",
    content: [
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum:",
    ],
    list: [
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus",
      "Etiam porta sem malesuada magna mollis euismod",
      "Praesent commodo cursus magna vel scelerisque nisl",
      "Donec id elit non mi porta gravida at eget metus",
    ],
    footer:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ut facilisis in, egestas eget quam.",
  },
  {
    title: "5. Magna Aliqua Veniam",
    content: [
      "Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna:",
    ],
    list: [
      "Integer posuere erat a ante venenatis dapibus posuere",
      "Aenean lacinia bibendum nulla sed consectetur",
      "Vestibulum id ligula porta felis euismod semper",
      "Donec ullamcorper nulla non metus auctor fringilla",
    ],
    footer:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    title: "6. Quis Nostrud Exercitation",
    content: [
      "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    ],
  },
  {
    title: "7. Ullamco Laboris Nisi",
    content: [
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit:",
    ],
    list: [
      "Pellentesque habitant morbi tristique senectus et netus",
      "Maecenas sed diam eget risus varius blandit",
      "Donec sed odio dui cras justo odio dapibus",
      "Aenean eu leo quam pellentesque ornare sem lacinia",
      "Fusce dapibus tellus ac cursus commodo tortor mauris",
      "Nullam quis risus eget urna mollis ornare vel eu leo",
    ],
    footer:
      "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ut facilisis in, egestas eget quam.",
  },
  {
    title: "8. Aliquip Ex Ea Commodo",
    content: [
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    ],
  },
  {
    title: "9. Duis Aute Irure Dolor",
    content: [
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.",
    ],
  },
  {
    title: "10. Excepteur Sint Occaecat",
    content: [
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    ],
  },
  {
    title: "11. Cupidatat Non Proident",
    content: [
      "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et:",
    ],
  },
];

function PrivacyPolicy() {
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
              Privacy Policy
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

export default PrivacyPolicy;
