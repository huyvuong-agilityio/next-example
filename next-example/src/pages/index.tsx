import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState<{ name: string }>({
    name: 'name',
  });

  const fetchUser = async () => {
    try {
      const response = await axios(window.location.href + 'api/user');
      const { data } = response;
      setUser({ ...data });
    } catch (error) {}
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{user.name}</h1>
      <button onClick={fetchUser}>Get user</button>
    </div>
  );
}
