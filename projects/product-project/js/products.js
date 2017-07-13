/* global $ _ */
$(function() {
    // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('/projects/product-project/data/product.json', function(products) {
            console.log('got it');
            // console.log(products);
            var $newMainDiv;

            var $dataList = products;
            var $mainDiv = $('<div>').addClass('all-div').appendTo('main')
            function listMaker(array) {
                var $products = products.map(function(product, i, a) {
                    function createPopUpWindow(product) {
                        $('.popup').remove()
                        var $popUp = $('<div>')
                            .addClass('popup')
                            .text(product.desc)
                            .text(product.availableColors)
                            .text(product.price)
                            .text(checkStock() + "    " + product.desc + "    " + "$" + product.price + "    " + "Available in: " + product.availableColors)
                            .css({
                                height: '200px',
                                width: '500px',
                                background: 'orange',
                                position: 'absolute',
                                top: '70px',
                                left: '75px'
                            })
                            var $closeButton = $('<button>')
                                .text('Close')
                                .addClass('btn')
                                .attr('id', 'close-btn')
                                .click(function() {
                                    $popUp.hide()
                                })
                                .appendTo($popUp)

                            .append($('<img>')
                                .attr('src', 'img/product/thumbs/' + product.image))

                        $('body').append($popUp)
                    }
                
                
                
                    function checkStock() {
                        if (product.stock <= 10) {
                            return "ONLY " + product.stock + " left! Hurry up and buy!"
                        }
                        else return product.stock + ' in stock.';
                    }
                    var $product = $('<div>')
                        .addClass('product')
                        .attr('id', product.id)
                        .text(product.desc)
                        .click(function() {
                            return createPopUpWindow(product)
                        })
                        .prepend($('<img>')
                            .attr('src', 'img/product/thumbs/' + product.image)
                            .addClass('product-image')
                            .attr('id', 'img' + i))
                    var $price = $('<div>').addClass('price').text("$" + product.price).appendTo($product);
                    return $product;
                });
                return $products;
            }
            $($mainDiv).append(listMaker(products));

            //MAKES A DIV FOR EACH PRODUCT, GIVES EACH AN CLASS OF 'PRODUCT', AND AN ID//
            //ALSO ADDS THUMBNAILS FOR EACH PRODUCT AND GIVES THEM A CLASS OF PRODUCT-IMAGE AND AN ID OF ITS INDEX//



            var $searchy = $('<div>')
                .addClass('search-box')
                .attr('label', 'Search');
            $searchy.prependTo('main');
            //DIV SEARCHY, APPENDED TO HTML, HOLDS SEARCH BOX/BUTTON
            // var $userInput = ($('#box-search')[0].value).toString().toLowerCase();   

            var $box = $('<input>')
                .addClass('search')
                .attr('id', 'box-search')
                .appendTo($searchy);
            //INPUT BOX, APPENDED TO DIV SEARCHY

            var $userInput = ($('#box-search')[0].value).toString()
            var $searchButton = $('<button>')
                .text('Search')
                .addClass('btn')
                .attr('id' , 'search-btn' )
                .click(function() {
                    var $userInput = ($('#box-search')[0].value).toString()
                    console.log($userInput)
                    return search(products, $userInput)
                })
                .appendTo($searchy);

                $searchButton.click(function(){
                    // var $userInput = ($('#box-search')[0].value).toString().toLowerCase()
                        ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(search(products, $userInput)))
                })
                
                    // $searchButton.click(function(){
                    // var $userInput = ($('#box-search')[0].value).toString()
                    // if ($newMainDiv) { 
                    //     ($newMainDiv).remove()
                    //       $newMainDiv = $('<div>').addClass('new-div')
                    //       $newMainDiv.appendTo('main')
                    // return ($newMainDiv).append(searchedListMaker(search(products, $userInput)))
                    // }
                    // })
                 
                //  $searchButton.click(function(){
                //     var $userInput = ($('#box-search')[0].value).toString()
                //           $newMainDiv.replaceWith(search(products, $userInput))
                //     // return ($newMainDiv).append(searchedListMaker(search(products, $userInput)))
                    
                // })
                
                
                //     else if ($newMainDiv) {
                //         ($newMainDiv).empty()
                //         //   $newMainDiv = $('<div>').addClass('new-div').appendTo('main')
                //     return ($newMainDiv).append(searchedListMaker(search(products, $userInput))) 
                //     }
                // })

            // $searchButton.click(function() {
            //     var $userInput = ($('#box-search')[0].value).toString()
            //   var  $newMainDiv = $('<div>').addClass('new-div').appendTo('main')
            //     return ($newMainDiv).append(searchedListMaker(search(products, $userInput)))
            // });



            function searchedListMaker(array) {
                var $userInput = ($('#box-search')[0].value).toString()
                var $searched = search(array, $userInput).map(function(product, i, a) {
                    var $searchedProduct = $('<div>')
                        .text(product.desc + " $" + product.price)
                        .prepend($('<img>')
                            .attr('src', 'img/product/thumbs/' + product.image))
                    return $searchedProduct;
                });
                return $searched;
            }



            function search(collection, term) {
                const output = [];  
                term = term.toLowerCase();
                _.each(collection, (function(value) {
                    if (isCollection(value)) {
                        if(search(value, term).length) {
                            output.push(value);
                        }
                    }
                    else {
                        if (typeof value === 'string') {
                            if (value.toLowerCase().indexOf(term) > -1) {
                                output.push(value);
                            }
                        }
                    }
                }))
                return output;
            }

            
                //SEARCH FUNCTION

            function filterApple() {
                var appleArray = [];
                products.map(function(product) {
                    // console.log(product.desc.toLowerCase())
                    if (product.desc.toLowerCase().indexOf('apple') > -1 || product.desc.toLowerCase().indexOf('iphone') > -1) {
                        appleArray.push(product);
                    }
                })
                return appleArray;
            }

            function filterSamsung() {
                var samsungArray = [];
                products.map(function(product) {
                    // console.log(product.desc.toLowerCase())
                    if (product.desc.toLowerCase().indexOf('samsung') > -1) {
                        samsungArray.push(product);
                    }
                })
                return samsungArray;
            }

            function filterCase() {
                var caseArray = [];
                products.map(function(product) {
                    // console.log(product.desc.toLowerCase())
                    if (product.type === 'case') {
                        caseArray.push(product);
                    }
                })
                return caseArray;
            }

            function filterPhone() {
                var phoneArray = [];
                products.map(function(product) {
                    // console.log(product.desc.toLowerCase())
                    if (product.type === 'phone') {
                        phoneArray.push(product);
                    }
                })
                return phoneArray;
            }

            var lowToHigh = function() {
                return products.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                })
            }

            function showAll() {
                var allArray = [];
                products.map(function(product) {
                    allArray.push(product);
                })
                return allArray
            }




            var $appleButton = $('<button>')
                .text('Apple Products')
                .addClass('btn')
                .attr('id', 'apple-btn')
                .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(filterApple()))
                })
                .appendTo($searchy)
               
               
                // $appleButton.click(function(){
                //         ($mainDiv).empty()
                //      return ($mainDiv).append(searchedListMaker(filterApple()))
                // })
                // $appleButton.click(function(){
                //     ($mainDiv).show(searchedListMaker(filterApple()));
                // })
                            //Apple Search Button


            var $samsungButton = $('<button>')
                .text('Samsung Products')
                .addClass('btn')
                .attr('id', 'samsung-btn')
                 .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(filterSamsung()))
                })
                .appendTo($searchy)
                //             //Samsung Search Button


            var $caseButton = $('<button>')
                .text('Phone Cases')
                .attr('id', 'cases-button')
                .addClass('btn')
                .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(filterCase()))
                })
                .appendTo($searchy)
                //             //Case Search Button


            var $phoneButton = $('<button>')
                .text('Phones')
                .addClass('btn')
                .attr('id', 'phone-btn')
                .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(filterPhone()))
                })
                .appendTo($searchy)
                //             //Phone Search Button


            var $priceButton = $('<button>')
                .text('Sort by Price')
                .addClass('btn')
                .attr('id', 'price-btn')
                .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(lowToHigh()))
                })
                .appendTo($searchy)
                //Price Sort Button


            var $allButton = $('<button>')
                .text('Show All')
                .addClass('btn')
                .attr('id', 'all-btn')
                .click(function() {
                    ($mainDiv).empty()
                     return ($mainDiv).append(searchedListMaker(showAll()))
                })
                .appendTo($searchy)



            


            function isCollection(value) {
                if (value === null || value instanceof Date) return false;
                if (typeof value === 'object') return true;
                return false;
            }


















        })
        .fail(function() {
            console.log('getJSON on discography failed!');
        });
    // ALL YOUR CODE GOES ABOVE HERE //
});
