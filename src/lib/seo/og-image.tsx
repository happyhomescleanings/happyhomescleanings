import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const ogImageAlt = site.name;
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export async function generateLogoOgImage() {
  const logo = await readFile(join(process.cwd(), "logos/logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf7f2",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- required by ImageResponse */}
        <img
          src={logoSrc}
          alt=""
          width={900}
          height={620}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    ),
    { ...ogImageSize },
  );
}
