"use client"

import ButtonLogout from "@/components/ButtonLogout"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"



function signin(){

  return(
    <>
    <Navbar/>
      <div className="min-h-screen"> 
        <h2>ini adalah halaman signin </h2>
        <p>
          slamat datang
        </p>
        
        <ButtonLogout />
        

      </div>
      <Footer/>
    </>
  )
}

export default signin;