import CoverImage from '../common/cover-image'
import PostTitle from './post-title'
import PostMetaTabs from "./post-meta-tabs";
import Badge, {BADGE_COLORS} from "../common/badge";

export default function PostHeader(props) {
  const {
    title, coverImage, date,
    projectLink, repoLink, techStackFront, techStackBack, techStackTools
  } = props;
  return (
    <div className={"mb-12"}>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto mb-4 md:mb-8">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="max-w-2xl mx-auto mb-12">
        <PostMetaTabs
          date={`📆 ${date}`}
          repo={'🕹️ GitHub Repo'}
          repoLink={repoLink}
          demo={'🔗 Live demo'}
          demoLink={projectLink}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        {techStackFront?.map((item, index) => <Badge
          color={BADGE_COLORS.BLUE}
          key={index} label={item}/>)}
        {techStackBack?.map((item, index) => <Badge
          color={BADGE_COLORS.PINK}
          key={index} label={item}/>)}
        {techStackTools?.map((item, index) => <Badge
          color={BADGE_COLORS.YELLOW}
          key={index} label={item}/>)}
      </div>
    </div>
  )
}
