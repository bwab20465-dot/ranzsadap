const readline = require("readline-sync");
const chalk = require("chalk");

// CLEAR
console.clear();

// TITLE BOX
function titleBox() {
    const title = " RANZ X SPY ";
    const border = "═".repeat(title.length + 4);

    console.log(chalk.cyan(`╔${border}╗`));
    console.log(chalk.cyan(`║  ${chalk.bold(title)}  ║`));
    console.log(chalk.cyan(`╚${border}╝\n`));
}

// PASSWORD
function login() {
    let pass = readline.question("Masukkan sandi: ", {
        hideEchoBack: true
    });

    if (pass !== "1234") {
        console.log(chalk.red("❌ Sandi salah!"));
        process.exit();
    }

    console.log(chalk.green("✔ Akses diterima!\n"));
}

// MENU
function menu() {
    console.log(chalk.yellow("[1] Start"));
    console.log(chalk.yellow("[2] Exit\n"));

    let pilih = readline.question("Pilih menu: ");

    if (pilih === "1") {
        startScan();
    } else if (pilih === "2") {
        console.log(chalk.red("Keluar dari sistem..."));
        process.exit();
    } else {
        console.log(chalk.red("Menu tidak valid!"));
        menu();
    }
}

// ANIMASI ANALISIS
function startScan() {
    let progress = 0;

    const colors = [
        chalk.red,
        chalk.green,
        chalk.yellow,
        chalk.blue,
        chalk.magenta,
        chalk.cyan
    ];

    const interval = setInterval(() => {
        process.stdout.write("\x1Bc");

        let color = colors[Math.floor(Math.random() * colors.length)];

        console.log(color("╔══════════════════════════════╗"));
        console.log(color(`║   ANALYZING... ${progress}%           ║`));
        console.log(color("╚══════════════════════════════╝"));

        progress++;

        if (progress > 100) {
            clearInterval(interval);

            console.log(chalk.green("\n✔ Analisis selesai!\n"));

            // DESKRIPSI
            console.log(chalk.yellow("📌 Deskripsi:"));
            console.log("cara menggunakan nya anda hanya perlu generate link lalu tempel ke penipu setelah penipu / target menekan itu maka semua identitas akan terbongkar , ketika generate link anda dapat mengedit ke link web lain 😈|| script by Raizz not Dev ||");


            // PERINGATAN
            console.log(chalk.red("⚠ PERINGATAN:"));
            console.log("peringatan jika target tau maka ganti link dengan yang baru");

            // LINK
            console.log(chalk.cyan("🔗 Akses website:"));
            console.log("👉 https://webcam360.org/\n");

            process.exit();
        }
    }, 50);
}

// RUN
titleBox();
login();
menu();
