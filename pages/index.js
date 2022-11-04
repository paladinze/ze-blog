import Container from '../components/layout/container'
import MoreStories from '../components/post-preview/more-stories'
import Intro from '../components/layout/intro'
import Layout from '../components/layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import TabMenu from "../components/menu/tab-menu";

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
          <TabMenu />
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
