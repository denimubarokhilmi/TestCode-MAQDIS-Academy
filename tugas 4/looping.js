const firtsLooping = (lenght) => {
    for (let index = 1; index <= lenght; index++) {
        if (index <= 1) console.log('FIRTS LOOP');
        if (index % 2 == 0) console.log(`${index} - I love coding`);
        else continue;
    }
    return;
};
// firtsLooping(20)
const secondLooping = (lenght) => {
    for (let index = lenght; index >= 1; index--) {
        if (index == lenght) console.log('SECOND LOOP');
        if (index % 2 == 0) console.log(`${index} - I will become a mobile developer`);
        else continue;
    }
    return;
}
console.clear();
secondLooping(20)