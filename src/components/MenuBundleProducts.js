import React, {Component} from 'react'


class MenuBundleProducts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuProduct: false,
            bundleProduct: this.props.bundleProduct
        }
    }
    
    render() {

        return (
            <div className="container">
                {this.state.bundleProduct.map((bundle) => (
                    <div key={bundle._id} className="MenuBundleProducts">
    
                        <div className="itemInfo">
                            
                            <div className="itemPhoto">
                                {/* <h3>Art: {bundle.refBundleProduct.articleNumber}</h3> */}
                                <img  src={bundle.refBundleProduct.imageUrl} alt={bundle.refBundleProduct.name} />
                            </div>
                            
                            <p>{bundle.refBundleProduct.description}</p>
                            
                            <h4 className="defaultPrice">{bundle.price ? bundle.price : bundle.refBundleProduct.defaultPrice}:-kr</h4> {/* Comment and use down*/}
                            {/* <h4 className="defaultPrice">{bundle.refBundleProduct.defaultPrice}:-kr</h4> */}
                        </div> 
    
                    </div>
                ))}
            </div>
        )
    }
}
    
export default MenuBundleProducts
