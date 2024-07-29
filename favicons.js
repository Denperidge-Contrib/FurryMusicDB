import { readFileSync, writeFile } from "fs";
import { favicons } from "favicons";

const src = "frontend/public/icon.svg";
const packageJson = JSON.parse(readFileSync("package.json", {encoding: "utf-8"}));
try {
    // NOTE: added optional: comments that might be relevant down the
    const response = await favicons(src, {
        path: "/",
        appName: "Furry Music Database",
        // appShortName: "",  - Optional, falls back to appName
        appDescription: "The Furry Musicians Database",
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

    console.log(response)
    response.files.concat(response.images).forEach(async (file) => {
        writeFile(`frontend/public/${file.name}`, file.contents, (err) => {
            if (err) {
                throw err;
            }
        })
    });
    writeFile(
        "frontend/components/Favicons.vue", 
        `<!-- This file is auto-generated using make favicons/npm run favicons -->
<template>
    ${response.html.join("\n    ")}
</template>`,
        { encoding: "utf-8" },
        (err) => { if (err) { throw err; } }
    );

} catch (err) {
    console.error(err)
}
