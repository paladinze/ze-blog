import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Image from "next/image";

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Paladinze</title>
        </Head>
        <Container>
          <Intro />
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 relative">
                <Image
                    className="h-12 w-12"
                    src="/assets/blog/thief/thief.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                />
              </div>
            </div>
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-gray-500">You have a new message!</p>
            </div>
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
