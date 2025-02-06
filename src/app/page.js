import Image from "next/image";
const ServicesPage = React.lazy(() => import("./display/page"));
const Bodybar = React.lazy(() => import("../app/component/Bodybar"));
import { Suspense } from "react";
import React from "react";
const Aboutme  = React.lazy(() => import("../app/component/aboutme"));
import Footer from "./component/foot"


export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>This is loading</p>}>
      <Bodybar />
      </Suspense>

     <Suspense fallback={<p>This is Loading</p>}>
     <Aboutme />
     </Suspense>
    <Suspense fallback={<p>This is Loading</p>}>
      <ServicesPage></ServicesPage>
      </Suspense>
      <Footer />

    </div>
  );
}
