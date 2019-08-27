import React, {Component} from 'react'
import MenuBundleProducts from './MenuBundleProducts';


class MenuProductCategories extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuToggle: false,
            menuProducts: this.props.menuProduct
        }
    }
      
    render() {

        return (
            <div className="container">
                {this.state.menuProducts.map((product) => (
                    <div key={product._id} className="MenuProductCategories">
                        <div >
                            <h2 onClick={() => this.setState({menuToggle: !this.state.menuToggle})}>{product.name}</h2>
                            <div>
                                    {this.state.menuToggle && <MenuBundleProducts bundleProduct={product.menuBundleProducts} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
    
export default MenuProductCategories
