import React from 'react'
import Link from 'next/link'
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="container mx-auto px-6 sm:px-10 text-center">
        <div className="text-gray-300 border-t w-full flex gap-5 sm:flex-row flex-col items-center justify-center sm:justify-between border-blue-400 py-8">
            <p className="align-middle">
                2021 &copy; Muhammad Aryo Muzakki
            </p>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=6281370309081">
                    <span className="align-middle text-3xl hover:text-white cursor-pointer">
                        <FaWhatsapp />
                    </span>
                </a>
                <a target="_blank" href="https://instagram.com/aryo.muzakki">
                    <span className="align-middle text-3xl hover:text-white cursor-pointer">
                        <FaInstagram />
                    </span>
                </a>
                <a target="_blank" href="mailto:aryo.muzakki@gmail.com">
                    <span className="align-middle text-3xl hover:text-white cursor-pointer">
                        <FaEnvelope />
                    </span>
                </a>
                <a target="_blank" href="https://linkedin/in/aryomuzakki">
                    <span className="align-middle text-3xl hover:text-white cursor-pointer">
                        <FaLinkedin />
                    </span>
                </a>
                <a target="_blank" href="https://github.com/aryomuzakki">
                    <span className="align-middle text-3xl hover:text-white cursor-pointer">
                        <FaGithub />
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
