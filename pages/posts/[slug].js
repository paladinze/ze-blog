import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/layout/container'
import PostBody from '../../components/post-detail/post-body'
import HeaderSignature from '../../components/post-detail/header-signature'
import PostHeader from '../../components/post-detail/post-header'
import Layout from '../../components/layout/layout'
import {getAllPosts, getPostBySlug} from '../../lib/api'
import PostTitle from '../../components/post-detail/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import {META_POST_TITLE_SUFFIX, POST_METADATA_FIELDS} from "../../data/constants";
import PostCommentsForm from "../../components/post-detail/post-comments–form";
import Spacer from "../../components/common/spacer";

export default function Post({post}) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  return (
    <Layout>
      <Container>
        <HeaderSignature/>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>
                {`${post.title}${META_POST_TITLE_SUFFIX}`}
              </title>
            </Head>
            <PostHeader {...post} />
            <PostBody content={post.content}/>
            {/*<Spacer />*/}
            {/*<PostCommentsForm slug={post.slug} />*/}
          </article>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, POST_METADATA_FIELDS)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
