import AddProduct from "../components/AddProducts/index.jsx";
import EachProducts from "../components/EachProducts/index.jsx";
import FeatureProducts from "../components/FeatureProducts/index.jsx";
import Products from "../components/Products/index.jsx";
import ProductsDetails from "../components/ProductsDetail/index.jsx";
import TrustedProducts from "../components/TrustedProducts/index.jsx";
import Home from "../pages/Home/index.jsx";
import SellingProducts from "../pages/SellingProducts.jsx"
export const ROUTES = [{
    path: "/",
    element: <SellingProducts />,
    children: [{
        index: true,
        element: <Home />
    }, 
    {
        path: "products",
        element: <Products />
    },
    {
        path: "productsdetail/:id",
        element: <ProductsDetails />
    },
    {
        path: "addproducts",
        element: <AddProduct />
    },
    {
        path: "eachproducts",
        element: <EachProducts />
    },
    {
        path: "featureproducts",
        element: <FeatureProducts />
    },
    {
        path: "trustedproducts",
        element: <TrustedProducts />
    },

    ]
}



]