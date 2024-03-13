const main = (arr1, arr2) => {
    const alen = arr1.length;
    const blen = arr2.length;
    const len = alen > blen ? alen : blen;
    const res = [];
    let p;
    let q;

    for (let i = 0; i < len; i++) {
        p = arr1[i];
        q = arr2[i];

        if (p > q) {
            [p, q] = [q, p];
        }

        if (p < res[res.length - 1]) {
            const temp = p;
            p = res[res.length - 1];
            res[res.length - 1] = temp;
        }

        if (p) {
            res.push(p);
        }

        if (q) {
            res.push(q);
        }
    }

    return res;
};

console.log(main([2, 5, 6, 9], [-1, 1, 2, 3, 29, 45, 66]));
