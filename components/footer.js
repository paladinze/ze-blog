import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/2">
            <a
              href="https://shaderly.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Home Planet
            </a>
            <a
              href="https://github.com/paladinze"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
      <Container >
        <div className="pb-8 flex flex-col lg:flex-row items-center justify-center">
          <div>
            Copyright © 2022 shaderly.com
          </div>
        </div>
      </Container>
    </footer>
  )
}
