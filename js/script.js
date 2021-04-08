var rightChevron = $('.chevron.right');

rightChevron.click(function() {
    //1.capire chi ha la classe active
    var currentActive = $('.slider .active');
    console.log(currentActive);
    //2.tolgo la classe active
    currentActive.removeClass('active');

    //5.se l' elemento attivo ha classe last(ultimo)
    if( currentActive.hasClass('last')){
        //6.aggiungo la classe active alla prima immagine
        $('.slider .first').addClass('active');
    } else {
        //7.aggiungo la classe active all'elemento successivo 
        var nextImg = currentActive.next();
        nextImg.addClass('active');
    }
    
    //3.devo selezionare l elemento successivo avendo l elemento corrente
    //var nextImg = currentActive.next();
    //console.log(nextImg)
    //4.aggiungo la classe active
    //nextImg.addClass('active');

});