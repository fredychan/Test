import { notFound } from "next/navigation";
export default function ReviewDetails({ params }: {
    params: {
        productid: string,
        reviewid: string
    }
}) {
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    return <h1>Review of {params.reviewid} for product {params.productid}</h1>
}