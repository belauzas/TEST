function ( data ) {
    var tags = [],
        HTML = `<div class="filter">
                    <div class="active">All</div>`;


        }

    HTML += `</div>
            <div class="list">`;

    data.forEach => {
        HTML += `<div class="b1.png">
                    <div class="absolute">
                        <div class="photo" style="background-image: url(img/b1.png);"></div>
                
                        </div>
                    </div>
                </div>`;
    });
    HTML += `</div>`;
    

    return HTML;
}