import PostCommentsForm from "../components/post-detail/post-comments–form";


export default {
  title: 'Posts/Post-comments-forms',
  component: PostCommentsForm
}

const Template = (args) => <PostCommentsForm {...args} />

export const EmptyForm = {
  args: {

  }
}
