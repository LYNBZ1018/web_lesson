let main = () => {
    let set = new Set();
    set.add(18);
    set.add(20);
    set.add(18);

    console.log(set.size);
    set.forEach(function (value) {
        console.log(value);
    });
}

export {
    main,
}