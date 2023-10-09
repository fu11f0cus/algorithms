function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1)
}

function task(n) {
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    return task(n - 1) + task(n - 2) + task(n - 3);

}

let hit = 0;
let miss = 0;

function taskWithCache(n, cache = []) {
    if (n < 0) {
        miss++;
        return 0;
    }
    if (!cache[n]) {
        miss++;
        if (n === 0) {
            cache[n] = 1;
        }
        else {
            cache[n] = taskWithCache(n - 1, cache) + taskWithCache(n - 2, cache) + taskWithCache(n - 3, cache)
        }
        return cache[n];
    }
    else {
        hit++;
        return cache[n];
    }
}

console.log(taskWithCache(12), `miss - ${miss}, hit - ${hit}`);