import React from 'react';

import Loading from "../components/Loading";
import { useAuthState } from "../contexts/AuthContext"

export default function GuestRoute ({children}){
  const {authenticated, loading, } = useAuthState();
  return (
    <>
    {
      loading ? <Loading /> : (
        !authenticated ? children : null
      )
    }
    </>
  )
}