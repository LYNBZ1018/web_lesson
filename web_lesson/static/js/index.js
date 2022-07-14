let main = function () {
    let $div1 = $('div-1');
    let $div2 = $('div-2');
    let $div3 = $('div-3');

    console.log($div3.parents('.div-2'));
    console.log($div1.find('div'));
}

export {
    main,
}