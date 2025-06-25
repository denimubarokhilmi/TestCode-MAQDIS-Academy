import readline from 'node:readline/promises';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
async function ask(qustion) {
    return rl.question(qustion)
}

async function witch(name, role) {
    console.log(`Selamat datang di Dunia Werewolf, ${name} "Halo ${role} ${name}, kamu dapat melihat siapa yang menjadi werewolf!"`);
    const playAgaint = await ask("Apakah ingin melanjutkan game ? Yes : No ");

    if (/Yes/i.test(playAgaint)) {
        return playGame();
    } else {
        rl.close()
    }
}
async function werewolf(name, role) {
    console.log(`Selamat datang di Dunia Werewolf, ${name} "Halo ${role} ${name}, Kamu akan memakan mangsa setiap malam!"`);
    const playAgaint = await ask("Apakah ingin melanjutkan game ? Yes : No ");
    if (/Yes/i.test(playAgaint)) {
        return playGame();
    } else {
        rl.close()
    }
}
async function guard(name, role) {
    console.log(`Selamat datang di Dunia Werewolf, ${name} "Halo ${role} ${name}, kamu akan membantu melindungi temanmu dari serangan werewolf".`);
    const playAgaint = await ask("Apakah ingin melanjutkan game ? Yes : No ");
    if (/Yes/i.test(playAgaint)) {
        return playGame();
    } else {
        rl.close()
    }
}
async function playGame() {
    console.clear();
    console.log(`Selamat datang dipermainan Werewolf`);
    await ask('Please enter to continue..');
    let name = await ask('Silahkan masukan nama anda : ');
    while (name.length == 0) {
        name = await ask('Nama tidak boleh kosong, Masukan nama anda : ');
    }
    async function roles() {
        let role = await ask('Silahkan masukan peran anda (witch/guard/werewolf) : ');
        while (role.trim().length == 0) {
            role = await ask('Peran tidak boleh kosong, Masukan peran anda (witch/guard/werewolf) :')
        };
        if (role == 'guard') return guard(name, role);
        else if (role == 'witch') return witch(name, role);
        else if (role == 'werewolf') return werewolf(name, role);
        else {
            console.log('Nama peran tidak ada')
            return roles();
        }

    };
    await roles();
}

playGame();

rl.on("close", () => {
    console.log(`sampai ketemu di game selanjutnya`);
    process.exit(0);
})