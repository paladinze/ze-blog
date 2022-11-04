import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Ze Cheng</title>
        </Head>
        <Container>
          <Intro />
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
    'externalLink'
  ])

  return {
    props: { allPosts },
  }
}
