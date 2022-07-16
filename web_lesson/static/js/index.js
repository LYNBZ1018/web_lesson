let main = () => {
    let $div = $('div');
    $div.css('cursor', 'pointer');
    $div.on('click', function () {
        // window.open("http://supcache.com:8081/");
        window.location.href = "http://supcache.com:8081/";
    });

    $div.dblclick(function () {
        location.reload();
    });
}

export {
    main,
}