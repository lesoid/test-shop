
import { Card } from "@prisma/client";
import {ICard } from "~~/types/ICard";
import { IProduct } from "~~/types/IProduct";

//Читаем с базы корзину пользователя
export async function getCard(id:number): Promise<ICard[] | null> {
    const { data } = await useFetch<ICard[]>(`/api/card`, { method: 'POST',
    body:  { id }})
      return data.value
}
// Меняем количество товара в корзине
export async function updateCard(id:number, count:number): Promise<Card|null> {
  const { data } = await useFetch<Card>(`/api/cart`, { method: 'PUT',
  body:  { id , count }})
  //console.log("!!!!! updateCard "+ data.value?.amount)
    return data.value
}
//Добавляем товар в корзину
export async function addToCard(id_prod:number, id_user:number): Promise<Card|null> {
  console.log("!!!!! updateCard id_prod "+ id_prod+"!!!!! id_user "+ id_user)
  const { data } = await useFetch<Card>(`/api/addtocart`, { method: 'POST',
  body:  { id_prod , id_user }})
  //console.log("!!!!! updateCard "+ data.value?.amount)
    return data.value
}

export async function delFromCart(id_to_cart:number): Promise<Card|null> {
  console.log("!!!+!! DeliteCard id_prod "+ id_to_cart)
  const { data } = await useFetch<Card>(`/api/delfromcart`, { method: 'DELETE',
  body:  { id_to_cart}})
  //console.log("!!!!! updateCard "+ data.value?.amount)
    return data.value
}