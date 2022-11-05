import Container from '../components/layout/container'
import PostList from '../components/post-preview/post-list'
import Intro from '../components/layout/intro'
import Layout from '../components/layout/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import TabMenu from "../components/menu/tab-menu";
import {useState} from "react";
import {DEFAULT_TAG} from "../data/constants";


export default function Index({allPosts}) {
  const [tag, setSelectedTag] = useState(DEFAULT_TAG);
  const filteredPosts = allPosts.filter(item => item.tag?.toLowerCase() === tag);
  return (
    <>
      <Layout>
        <Head>
          <title>Ze Cheng</title>
        </Head>
        <Container>
          <Intro/>
          <TabMenu
            selectedTag={tag}
            setSelectedTag={setSelectedTag}/>
          <PostList posts={filteredPosts}/>
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
    'tag',
    'coverImage',
    'excerpt',
    'externalLink'
  ])

  return {
    props: {allPosts},
  }
}
