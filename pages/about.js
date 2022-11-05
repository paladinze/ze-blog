import {CONTACT_INFO, PROJECT_LINKS} from "../data/constants";

function LinkButton(props) {
  return <a
    href={props.url}
    className={`mr-3 bg-white hover:bg-gray-700 hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 ${props.className}`}
  >
    {props.name}
  </a>
}

function SubTitle(props) {
  return <h2 className="mb-4 text-1xl md:text-2xl font-bold tracking-tighter leading-tight">
    {props.text}
  </h2>;
}

function Section(props) {
  return <div className={'mb-6'}>{props.children}</div>
}

function Contact(props) {
  return <Section>
    <SubTitle text={'📬 CONTACT'}/>
    <div className="flex flex-row justify-left items-center flex-wrap">
      {
        CONTACT_INFO.map(({name, url}, index) => {
          return <LinkButton name={name} url={url} key={index}/>
        })
      }
    </div>
  </Section>
}



export function Job(props) {
  return <div className={"mb-3"}>
    <h3 className="mb-2 text-lg md:text-1xl  tracking-tighter leading-tight">
      {props.title}
    </h3>
    <div>{`${2021} - ${2022}`}</div>
  </div>
}


export default function About() {
  return <>
    <div>
      <div className={"relative container mx-auto px-5 py-16 max-w-3xl"}>
        <LinkButton name={'HOME'} url={'/'} className="absolute right-0" />
        <header className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">Ze Cheng</h1>
          <h2 className="mb-2 text-1xl md:text-2xl font-bold tracking-tight leading-tight">Software Engineer</h2>
          <p>A software engineer living in Toronto. Former engineer at Tencent, Thoughtworks and IBM. He loves anything
            that draws pictures on computers 😇. </p>
        </header>

        <Contact />

        <Section>
          <SubTitle text={'🧮 Employment'}/>
          <Job title={'Senior Software Engineer, Tencent'} startYear={2021} endYear={2022}/>
          <Job title={'Software Consultant, Thoughtworks'} startYear={2019} endYear={2021}/>
          <Job title={'Software Engineer, IBM Canada'} startYear={2016} endYear={2018}/>
        </Section>

        <Section>
          <SubTitle text={'💎 Project'}/>
          <h3 className="mb-4 text-lg md:text-1xl tracking-tighter leading-tight">
            {"Immersive Experience"}
          </h3>
          <div className="flex flex-row justify-left items-center flex-wrap">
            {
              PROJECT_LINKS.map(({name, url}, index) => {
                return <LinkButton name={name} url={url} key={index}/>
              })
            }
          </div>
        </Section>
      </div>
    </div>
  </>
}
