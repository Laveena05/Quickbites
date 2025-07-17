export async function fetchFromSpoonacular(endpoint: string, params: Record<string, string | number>) {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const url = new URL(`https://api.spoonacular.com/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));
  url.searchParams.append('apiKey', apiKey || '');
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to fetch from Spoonacular');
  return res.json();
} 