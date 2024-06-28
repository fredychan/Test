import { Metadata } from "next"
import Link from "next/link"
type Props = {
    params: {
        productid: string;
    }
}

export const generateMetadata = async ({params} : Props): Promise<Metadata> => {
    const title = await new Promise( resolve => {
        setTimeout(()=>{
            resolve(`Iphone ${params.productid}`)
        },100);
    })
    return {
        title : `Product ${title}`
    }
}

export default function ProductDetails({ params }: Props) {
    return <h1>Details About Products {params.productid}</h1>
}