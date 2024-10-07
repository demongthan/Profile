"use client"

import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine:Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded=useCallback(async ()=>{}, [])

    const particlesOptions:ISourceOptions = {
        fullScreen: {
            enable: false,
            zIndex: -1,
        },
        background:{
            color:{
                value:''
            }
        },
        fpsLimit:120,
        interactivity:{
            events:{
                onClick:{
                    enable:false,
                    mode:'push'
                },
                onHover:{
                    enable:true,
                    mode:'repulse'
                },
                resize:true
            },
            modes:{
                push:{
                    quantity:90
                },
                repulse:{
                    distance:200,
                    duration:0.4
                }
            }
        },
        particles: {
            color:{
                value:'#e68e2e'
            },
            links:{
                color:'#f5d393',
                distance:150,
                enable:true,
                opacity:0.5,
                width:1
            },
            collisions:{
                enable:true
            },
            move:{
                direction:'none',
                enable:true,
                outModes:{
                    default:'bounce'
                },
                random:false,
                speed:1,
                straight:false
            },
            number:{
                density:{
                    enable:true,
                    area:800
                },
                value:80
            },
            opacity:{
                value:0.5
            },
            shape:{
                type:'circle',
            },
            size:{
                value:{min:1, max:5}
            }
        },
        detectRetina:true,
    };

    return (
        <Particles
            className='w-full h-full absolute translate-z-0' 
            id={"tsparticles"} 
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={particlesOptions}
        ></Particles>
    )
}

export default ParticlesContainer