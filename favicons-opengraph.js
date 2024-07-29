import { readFileSync, writeFile } from "fs";
import { favicons } from "favicons";

const title = "Furry Music Database";
const description = "The Furry Musicians Database";

const src = "frontend/public/icon.svg";
const packageJson = JSON.parse(readFileSync("package.json", {encoding: "utf-8"}));
try {
    // NOTE: added optional: comments that might be relevant down the
    const response = await favicons(src, {
        path: "/",
        appName: title,
        // appShortName: "",  - Optional, falls back to appName
        appDescription: description,
        // developerName && developerURL: optional
        cacheBustingQueryParam: "1.0",  // Change if favicon changes
        dir: "auto",
        lang: "en-US",
        background: "#3396b6",
        theme_color: "#3396b6",
        // optional: appleStatusBarStyle
        // optional: display
        // optional: orientation
        // optional: scope. I don't know what that means though
        // optional: start_url
        version: packageJson.version,
        // optional: pixel_art
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            favicons: true,
            windows: true,
            yandex: true
        }
    // optional: shortcuts
    });

    response.files.concat(response.images).forEach(async (file) => {
        writeFile(`frontend/public/${file.name}`, file.contents, (err) => {
            if (err) {
                throw err;
            }
        })
    });

    const head = response.html.concat([
        `<meta name="description" content="${description}"/>`,
        `<link rel="canonical" href="https://furrymusicians.info/"/>`,
        `<meta property="og:title" content="${title}"/>`,
        `<meta property="og:description" content="${description}"/>`,
        `<meta property="og:image" content="https://furrymusicians.info/public/apple-touch-icon-1024x1024.png"/>`,
        `<meta property="og:image:width" content="1024"/>`,
        `<meta property="og:image:height" content="1024"/>`,
        `<meta property="og:image:alt" content="TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"/>`,
        `<meta property="og:url" content="https://furrymusicians.info/"/>`,
        `<meta property="og:site_name" content="${title}"/>`,
        `<meta property="og:type" content="website"/>`
        `<meta name="twitter:card" content="summary"/>`,
        `<meta name="twitter:title" content="${title}"/>`,
        `<meta name="twitter:description" content="${description}"/>`,
        `<meta name="twitter:image" content="https://furrymusicians.info/public/apple-touch-icon-1024x1024.png"/>`,
        `<meta name="twitter:image:alt" content="TODOOOOOOOOOOOOOOOOOOOOOO"/>`
    ]).join("\n"+" ".repeat(8));

    const appVuePath = "frontend/App.vue";
    let appVue = readFileSync(appVuePath, {encoding: "utf-8"});
    appVue = appVue.replace(
        /<!--FAVICON-OPENGRAPH-START.*FAVICON-OPENGRAPH-END-->/s,
        `<!--FAVICON-OPENGRAPH-START-->
        ${head}
        <!--FAVICON-OPENGRAPH-END-->`
    );
    
    writeFile(appVuePath, appVue, { encoding: "utf-8" }, (err) => {
        if (err) { throw err; }
    });

} catch (err) {
    console.error(err)
}
