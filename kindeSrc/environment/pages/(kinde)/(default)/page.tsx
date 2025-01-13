"use server";

import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeWidget,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

export const pageSettings = {
  bindings: {
    "kinde.localization": {},
  },
};

const Layout = async ({ request }) => {
  return (
    <html lang={request.locale.lang}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF} />
        <title>Hello world</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
      </head>
      <body>
        <dev>
          <header>
            <h1>Company Name</h1>
          </header>
          <main>
            <h6>How are you</h6>
            {getKindeWidget()}
          </main>
        </dev>
      </body>
    </html>
  );
};

const Page = async (event) => {
  const page = await Layout({ ...event });
  return renderToString(page);
};

export default Page;
