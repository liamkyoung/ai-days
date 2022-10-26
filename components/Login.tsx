import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { resetUser, setUser, setUserEmail } from '../redux/slices/userSlice'
import { UserState } from '../lib/types'

type Props = {}

function Login({}: Props) {
  const { data: session } = useSession()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(resetUser())
    signOut()
  }

  const handleSignIn = () => {
    signIn()
  }

  //   useEffect(() => {

  //   }, [])

  if (session) {
    dispatch(setUserEmail(session.user?.email!))

    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUser(data))
      })

    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => handleSignOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => handleSignIn()}>Sign in</button>
    </>
  )
}

export default Login
