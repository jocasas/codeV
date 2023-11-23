"use client";
// `app/page.tsx` is the UI for the `/` URL
import Layout from "./layout.";
import "./marquee.css";

export default function Page() {
  const marqueeStyle = {
    animation: "marquee 25s linear infinite",
  };

  const marquee2Style = {
    animation: "marquee2 25s linear infinite",
  };

  const text =
    "You spin me right round, baby. Like a record, baby".toUpperCase();

  return (
    <Layout>
      <div className="ml-10 Main">
        <div
          className="text-white font-sans
"
        >
          {" "}
          <div className="marquee">
            <span>Text 1</span>
            <span>Text 2</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
