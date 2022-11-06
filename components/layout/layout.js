import Footer from './footer'
import Meta from './meta'
import {DarkModeButton} from "../common/dark-mode-button";

export default function Layout({ children }) {

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<div className="flex flex-row justify-end container md:mx-auto">*/}
        {/*  <DarkModeButton />*/}
        {/*</div>*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
