import Head from 'next/head'
import React from 'react'

function Title(props) {
  return (
    <>
    <Head>
        <title>{props.title}</title>
    </Head>
    </>
  )
}

export default Title