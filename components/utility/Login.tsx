import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { resetUser, setUser, setUserEmail } from '../../redux/slices/userSlice'
import { UserState } from '../../lib/types'

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

  if (session) {
    dispatch(setUserEmail(session.user?.email!))

    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUser(data))
      })

    return (
      <>
        <button className="btn btn-neutral" onClick={() => handleSignOut()}>
          Sign out
        </button>
      </>
    )
  }

  return (
    <>
      <button className="btn btn-secondary" onClick={() => handleSignIn()}>
        Sign in
      </button>
    </>
  )
}

export default Login
