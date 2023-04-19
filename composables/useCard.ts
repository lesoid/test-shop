
import { Card } from "@prisma/client";
import {ICard } from "~~/types/ICard";
import { IProduct } from "~~/types/IProduct";
export async function getCard(id:number): Promise<ICard[] | null> {
    const { data } = await useFetch<ICard[]>(`/api/card`, { method: 'POST',
    body:  { id }})
      return data.value
}

export async function updateCard(id:number, count:number): Promise<Card|null> {
  const { data } = await useFetch<Card>(`/api/cart`, { method: 'PUT',
  body:  { id , count }})
  //console.log("!!!!! updateCard "+ data.value?.amount)
    return data.value
}