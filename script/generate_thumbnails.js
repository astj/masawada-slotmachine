#!/usr/bin/env node
/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require("child_process");

const masawadaSymbols = ["ma", "sa", "wa", "da"];

function expandNext(prev) {
  return prev.flatMap((list) =>
    masawadaSymbols.map((symbol) => [...list, symbol])
  );
}

const candidates = expandNext(
  expandNext(expandNext(masawadaSymbols.map((symbol) => [symbol])))
);

// montage ws.png ma.png sa.png ws.png ws.png wa.png da.png ws.png -geometry 200x200 -tile 4x2 ../thumbnails/masawada.png
candidates.forEach((candidate) => {
  const filenameArgs = [
    "ws",
    candidate[0],
    candidate[1],
    "ws",
    "ws",
    candidate[2],
    candidate[3],
    "ws",
  ].map((filename) => `public/images/${filename}.png`);
  const thumbnailFilepath = `public/thumbnails/${candidate.join("")}.png`;
  exec(
    `montage ${filenameArgs.join(
      " "
    )} -geometry 200x200 -tile 4x2 ${thumbnailFilepath}`
  );
});
