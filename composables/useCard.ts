export async function getCard(username:string): Promise<ICard[] | null> {
    const { data } = await useFetch<ICard[]>(`/api/card`, { method: 'POST',
    body:  { username }})
      return data.value
}