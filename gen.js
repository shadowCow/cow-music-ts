keys = [];
for (let i = 1; i < 9; i++) {
  ["A", "As", "B", "C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs"].forEach(
    (n, j) => {
      keys.push(`${n}${i}`);
    }
  );
}

// output = `export type Key =
// ${keys.map((k) => `    | '${k}'`).join("\n")};
// `;

output = `export const allKeys = [
    ${keys.map((k) => `    '${k}',`).join("\n")}
]`;

console.log(output);
