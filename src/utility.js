export function getRandom(n) {
    return Math.floor(Math.random() * n)
}

export function getRandomElements(arr, n) {
    const shuffled = arr.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, n);
}

export function getRandomElement(arr) {
    return arr[getRandom(arr.length)];
}
