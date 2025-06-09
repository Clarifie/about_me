var curMenu = -1 ;
var menuRot = 0 ;
var menuActive = false ;

function menuClick ( section )
{
    const menu = document.getElementById( "menu-container" ) ;

    if ( curMenu == section )
    {
        document.getElementById( "menu-box" ).classList.remove( "active" ) ;
        menuActive = false ;
        menuRot -= menuRot % 360 ;
        curMenu = -1 ;
    }
    else
    {
        if ( !menuActive ) {
            document.getElementById( "menu-box" ).classList.add( "active" ) ;
            menuActive = true ;
            menuRot = -45 ;
        }

        /* Rotation of Menu */
        menuRot += ( ( section - curMenu + 4 ) % 4 ) * 90 ;
        curMenu = section ;
    }

    menu.style.rotate = menuRot + "deg" ;

    for ( let child of document.getElementsByClassName( "counter-rotate" ) )
    {
        child.style.rotate = "-" + menuRot + "deg" ;
    }
}
