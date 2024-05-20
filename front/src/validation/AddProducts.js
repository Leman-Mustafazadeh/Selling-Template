import * as Yup from "yup"
export const AddProductsSchema = Yup.object().shape({
    imgSrc:Yup.string().url().required("img is required"),
    name:Yup.string().required("name is required"),
    title:Yup.string().required("title is required")

})