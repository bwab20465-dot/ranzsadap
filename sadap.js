const os = require("os");

// Ambil ukuran terminal
const width = process.stdout.columns || 80;

// Isi pesan
const message = "SERVER MAINTENANCE SEMENTARA UNTUK 30 HARI!!";

// Fungsi bikin garis
function line(char, len) {
  return char.repeat(len);
}

// Bersihkan terminal
console.clear();

// Hitung padding biar ke tengah
const boxWidth = message.length + 6;
const paddingLeft = Math.max(0, Math.floor((width - boxWidth) / 2));

// fungsi cetak tengah
function printCentered(text) {
  console.log(" ".repeat(paddingLeft) + text);
}

// Kotak
const top = "┌" + line("─", boxWidth - 2) + "┐";
const midEmpty = "│" + " ".repeat(boxWidth - 2) + "│";
const msgLine = "│  " + message + "  │";
const bottom = "└" + line("─", boxWidth - 2) + "┘";

// Render
printCentered(top);
printCentered(midEmpty);
printCentered(msgLine);
printCentered(midEmpty);
printCentered(bottom);

// tambahan efek
setInterval(() => {
  process.stdout.write(".");
}, 1000);
