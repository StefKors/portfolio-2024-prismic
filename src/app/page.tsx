import { ProjectGrid } from '@/components/ProjectGrid';
import { createClient } from '@/prismicio';

export default async function Home() {
  const client = createClient();
  const projects = await client.getAllByType('projects');
  const appPreviews = projects
    ?.map((project) => {
      const slice = project?.data?.slices.find((slice) => {
        return slice?.slice_type == 'app_window_screenshot';
      });
      if (slice) {
        return project;
      } else {
        return null;
      }
    })
    .filter((n) => !!n);

  return (
    <main>
      {/*<div className={styles.homeHeader}>*/}
      {/*  {appPreviews && <ShowcaseOverview appPreviews={appPreviews} />}*/}
      {/*  <div className={styles.inset}></div>*/}
      {/*</div>*/}
      {/*<ArticleList />*/}
      {appPreviews && <ProjectGrid appPreviews={appPreviews} />}
    </main>
  );
}
