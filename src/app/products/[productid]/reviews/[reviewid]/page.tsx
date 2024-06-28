"use client";
import { notFound } from "next/navigation";

type prop = {
    params:{
        productid: string,
        reviewid: string
    }
}
function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: prop) {
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading review");
    }
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    return <h1>Review of {params.reviewid} for product {params.productid}</h1>
}