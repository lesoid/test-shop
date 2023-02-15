
import {ICard } from "~~/types/ICard";
import { IProduct } from "~~/types/IProduct";
export async function getCard(id:number): Promise<ICard[] | null> {
    const { data } = await useFetch<ICard[]>(`/api/card`, { method: 'POST',
    body:  { id }})
      return data.value
}