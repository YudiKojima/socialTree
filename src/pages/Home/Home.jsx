import React from 'react'

import { FaTwitter, FaTwitch, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import './styles.css'

function Home() {
  return (
    <main>
        <div className="perfilHome">
            <img
            src="https://avatars.githubusercontent.com/u/118221566?v=4"
            alt="perfil"
            />
        </div>
        <div className='perfilInstagram'>
            <span>@instagram</span>
        </div>
        <div className='perfilLink'>
            <button>LINK 1</button>
            <button>LINK 2</button>
            <button>LINK 3</button>
            <button>LINK 4</button>
        </div>
        <div className='perfilIcon'>
            <FaTwitter />
            <FaTwitch />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />
        </div>
    </main>
  )
}

export default Home