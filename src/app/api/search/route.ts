import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  //console.log('query is', query)
  return new Response(query, {
    status: 200,
  })
  // query is "hello" for /api/search?query=hello
}