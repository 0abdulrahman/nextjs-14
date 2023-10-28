import { useSession } from 'next-auth/react'
import React from 'react'

export default function ClientComponent() {
  const data = useSession();
  console.log(data);
  
  return (
    <div>ClientComponent</div>
  )
}
