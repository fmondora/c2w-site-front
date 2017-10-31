import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import './index.css';

export default class MobileMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            menus: {
                firstSection: 'Cycle2Work',
                features: 'Features',
                howItWorks: 'How it works',
                factsAndFigures: 'Facts and figures',
                why: 'Why',
                join: 'Join',
                standings: 'Standings'
            },
            side: 'right',
            isOpen: false
        };
    }

    getItem (item) {
        return (
            <a
                href={'#'.concat(item)}
                key={item}
                onClick={() => {
                    return this.setState(() => ({
                        isOpen: false
                    }));
                }}
            >
                <span>{this.state.menus[item]}</span>
            </a>
        );
    }

    getMenu () {
        const Menu = BurgerMenu[this.state.currentMenu];
        const items = [
            this.getItem('firstSection'),
            this.getItem('features'),
            this.getItem('howItWorks'),
            this.getItem('factsAndFigures'),
            this.getItem('why'),
            this.getItem('join'),
            this.getItem('standings')
        ];

        return (
            <div className={this.state.side}>
                <Menu
                    id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                    right={false}
                    width={'18.5em'}
                    isOpen={this.state.isOpen}
                >
                    {items}
                </Menu>
            </div>
        );
    }

    render () {
        return (
            <div id='outer-container'>
                {this.getMenu()}
            </div>
        );
    }
}
