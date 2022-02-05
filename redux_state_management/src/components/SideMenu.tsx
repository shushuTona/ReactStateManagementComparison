import {
    VFC,
    memo
} from 'react';
import { NavLink } from "react-router-dom";
import '../css/SideMenu.css';

const RouteList = [
    {
        id: 1,
        to: '/',
        name: 'Home'
    },
    {
        id: 2,
        to: '/favorite',
        name: 'Favorite'
    },
];

const SideMenu: VFC = memo( () => {
    return (
        <div className="sidemenu">
            <ul className="sidemenuList">
                {
                    RouteList.map( ( item ) => {
                        return (
                            <li className="sidemenuListItem" key={item.id}>
                                <NavLink className={( { isActive } ) => isActive ? "isActive" : ""} to={ item.to }>{ item.name }</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
} );

export default SideMenu;
