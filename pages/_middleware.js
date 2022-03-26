import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request) {
  if (process.env.MAINTENANCE_MODE === 'true') {
    console.log("🚀 ~ file: _middleware.js ~ line 6 ~ middleware ~ process.env.MAINTENANCE_MODE", process.env.MAINTENANCE_MODE)
    return NextResponse.rewrite(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}