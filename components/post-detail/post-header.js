import DateFormatter from '../../utils/date-formatter'
import CoverImage from '../common/cover-image'
import PostTitle from './post-title'
import FluidTabs from "../common/fluid-tabs";

export default function PostHeader(props) {
  const {
    title, coverImage, date,
    projectLink, repoLink
  } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto mb-4 md:mb-8">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <FluidTabs
          date={`📆 ${date}`}
          repo={'🕹️ GitHub Repo'}
          repoLink={repoLink}
          demo={'🔗 Live demo'}
          demoLink={projectLink}
        />
      </div>
    </>
  )
}
