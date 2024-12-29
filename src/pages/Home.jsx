import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import  Island  from '../models/island';
const home = () => {
  return (
    <section className='w-full h-screen relative'>
        <Canvas className='w-full h-screen relative'
        camera={{near: 0.1, far:1000}}>

            <Suspense fallback={<Loader />}>
             <Island />
            </Suspense>

        </Canvas>
      </section>
  )
}

export default home