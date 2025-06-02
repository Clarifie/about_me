var curMenu = 0 ;
var menuRot = 45 ;
var menuActive = false ;

function menuClick ( section )
{
    const menu = document.getElementById( "menu-container" ) ;

    if ( !menuActive )
    {
        document.getElementById( "menu-box" ).classList.add( "active" ) ;
        menuActive = true ;
    }
    else if ( curMenu == section )
    {
        document.getElementById( "menu-box" ).classList.remove( "active" ) ;
        menuActive = false ;
    }

    /* Rotation of Menu */
    menuRot += ( ( section - curMenu + 4 ) % 4 ) * 90 ;
    curMenu = section ;

    menu.style.rotate = menuRot + "deg" ;

    for ( let child of document.getElementsByClassName( "counter-rotate" ) )
    {
        child.style.rotate = "-" + menuRot + "deg" ;
    }
}
