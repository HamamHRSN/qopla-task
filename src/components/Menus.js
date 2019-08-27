import React, {Component} from 'react'
import data from '../data/menu_test.json'
import MenuProductCategories from './MenuProductCategories';

class Menus extends Component{

        state = {
          menuBotton: false
        }
        render() {
    
        const mainMenu = data.menus;

            return (
                <div className="container">
                {mainMenu.map((menu, index) => (
                    <div key={index} className="Menus">
                    <div className="menuInfo"  onClick={() => this.setState({menuBotton: !this.state.menuBotton})}>
                            <h1>{menu.name}</h1>
                            <h2>{menu.companyId}</h2>
                            <p>{menu.description}</p>
                    </div>
                    <hr />
                    {this.state.menuBotton && <MenuProductCategories menuProduct={menu.menuProductCategories} />}
                    </div>
                ))}

                </div>
            )
    }
}

export default Menus
