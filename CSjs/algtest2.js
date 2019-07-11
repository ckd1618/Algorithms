
for (let i = 0; i < 10; i++) {
    loop1:
    for (let j = 5; j < 10; j++) {
        if (i == j) break loop1;
        console.log(i, j)
    }
}