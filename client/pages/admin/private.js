import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Private = () => {
  const [proceed, setProceed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          setProceed(true)
        } else {
          setProceed(true)
          // router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [])

  if (!proceed) {
    return <p />
  }

  return (
    <div>
      <h1>Private</h1>
    </div>
  )
}

export default Private
