var rightChevron = $('.chevron.right');

rightChevron.click(function() {
    //capire chi ha la classe active
    var currentActive = $('.slider .active');
    console.log(currentActive);
    //tolgo la classe active
    currentActive.removeClass('active');
    
    //devo selezionare l elemento successivo avendo l elemento corrente
    var nextImg = currentActive.next();
    console.log(nextImg)
    //aggiungo la classe active
    nextImg.addClass('active');

});