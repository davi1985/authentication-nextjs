import { cookies } from 'next/headers'

export const getAccessToken = () => cookies().get('accessToken')?.value
