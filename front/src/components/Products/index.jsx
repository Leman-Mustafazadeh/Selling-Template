import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ContextProducts';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./index.module.scss"
import { deleteOne } from '../../API';
import Swal from "sweetalert2"
import { Link } from 'react-router-dom';
const Products = () => {
    const { products, setProducts,basket, setBasket } = useContext(ProductsContext)

    const handDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOne(id)
                const del = products.filter((x) => x._id !== id)
                setProducts(del)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    const handleBasket = (product) => {
       
        const target = basket.find(x => x._id == product._id)
        if (target) {
            target.count+=1
            target.totalPrice=target.count*target.price
            setBasket([...basket])
            localStorage.setItem("basket", JSON.stringify([...basket]))
        } else {
            const newItem = {
                count: 1,
                totalPrice: product.price,
                ...product
            }
            setBasket([...basket,newItem])
        localStorage.setItem("basket", JSON.stringify([...basket,newItem]))

        }
    }
    console.log(products);
    return (
        <section className={styles.pro_sec}>
            <div className="container">
                <h5>POPULAR PRODUCTS</h5>
                <h1>Our Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                <Button style={{ backgroundColor: 'pink', margin: '20px 0' }}><Link to={'/addproducts'} style={{ textDecoration: 'none' }}>Add Products</Link></Button>
                <Card className={styles.cards}> {
                    products && products.map((item) => {
                        return (

                            <Card sx={{ maxWidth: 345 }} key={item.id} >
                                <CardMedia
                                    sx={{ height: 340 }}
                                    image={item.imgSrc}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => {
                                        handDelete(item._id)
                                    }}>Delete</Button>
                                    <Button size="small" ><Link to={'/productsdetail/' + item._id}>Detail</Link></Button>
                                    <Button size="small" onClick={() => {
                                        handleBasket(item)
                                    }} >BASKET</Button>

                                </CardActions>
                            </Card>

                        )
                    })
                }</Card>

            </div>
        </section>
    )
}

export default Products