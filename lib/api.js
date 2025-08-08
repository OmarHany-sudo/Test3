export async function fetchShop(slug){ 
  // For now return mock data; replace with fetch(`${process.env.NEXT_PUBLIC_API_URL}/shops/${slug}`)
  const res = await fetch('/api/mock')
  return res.json()
}
