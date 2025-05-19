import { NextResponse } from 'next/server';
import propertiesJsonFile from '&/properties_list.json';

export function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const countParam = searchParams.get('count');

    let countNum = parseInt(countParam as string, 10);
    if (isNaN(countNum) || countNum <= 0) {
      countNum = 6;
    }

    const result = propertiesJsonFile.slice(0, countNum);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to load properties' },
      { status: 500 }
    );
  }
}
