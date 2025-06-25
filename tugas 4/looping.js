const firstLooping = (lenght) => {
    for (let index = 1; index <= lenght; index++) {
        if (index <= 1) console.log('LOOPING PERTAMA');
        if (index % 2 == 0) console.log(`${index} - I love coding`);
        else continue;
    }
    return;
};
const secondLooping = (lenght) => {
    for (let index = lenght; index >= 1; index--) {
        if (index == lenght) console.log('LOOPING KEDUA');
        if (index % 2 == 0) console.log(`${index} - I will become a mobile developer`);
        else continue;
    }
    return;
}
console.clear();
firstLooping(20)
secondLooping(20)