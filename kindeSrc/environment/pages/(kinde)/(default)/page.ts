import {
    getKindeCSRF,
    getKindeRequiredCSS,
    getKindeRequiredJS,
    getKindeWidget,
  } from "@kinde/infrastructure";
  
  const Page = ({request}) => {
    return `
          <html lang="${request.locale.lang}">
              <head>
                  <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex" />
      <meta name="csrf-token" content="${getKindeCSRF}" />
      <title>Hello world</title>
      ${getKindeRequiredCSS()}
      ${getKindeRequiredJS()}
    </head>
    <body>
      <dev>
        <header>
          <h1>Componey Name</h1>
        </header>
        <main>
          <h6>How are you</h6>
          ${getKindeWidget()}
        </main>
      </dev>
    </body>
  </html>
  
          `;
  };
  
  export default Page;
  