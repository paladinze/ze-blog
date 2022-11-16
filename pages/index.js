import Container from '../components/layout/container'
import PostList from '../components/post-preview/post-list'
import Intro from '../components/layout/intro'
import Layout from '../components/layout/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import TabMenu from "../components/menu/tab-menu";
import {useMemo, useState} from "react";
import {DEFAULT_TAG, META_HOME_TITLE, POST_METADATA_FIELDS, TAGS} from "../data/constants";


export default function Index({allPosts}) {
  const [tag, setSelectedTag] = useState(DEFAULT_TAG);
  const filteredPosts = useMemo(() => {
    if (tag === TAGS.ALL) {
      return allPosts;
    }
    return allPosts.filter(
      item => item.tags?.includes(tag)
    );
  }, [tag]);
  return (
    <>
      <Layout>
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
  const allPosts = getAllPosts(POST_METADATA_FIELDS)

  return {
    props: {allPosts},
  }
}
