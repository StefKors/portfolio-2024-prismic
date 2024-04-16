import styles from "./page.module.css";
import {createClient} from "@/prismicio";
import IntroHeader from "@/components/IntroHeader";

export default async function Home() {
    const client = createClient();

    const page = await client.getByType("homepage");

    const projects = await client.getAllByType("projects");
    const appPreviews = projects?.map((project) => {
        const slice = project?.data?.slices.find(slice => {
            return slice?.slice_type == "app_window_screenshot"
        })
        if (Boolean(slice)) {
            return project
        } else {
            return null
        }
    }).filter(n => n)
    return (
        <main>
            <div className={styles.homeHeader}>
                {/*<ZStack>*/}
                {/*<h1 className={styles.backgroundTitle}>Stef builds apps, lots of them.</h1>*/}
                {/*{appPreviews && <AppScreensOverview appPreviews={appPreviews}/>}*/}
                {/*</ZStack>*/}
                {appPreviews && <IntroHeader appPreviews={appPreviews}/>}
            </div>
            <div className="moreContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore
                quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati
                quis, quos rerum voluptas. lorem ipsum lo Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum lo Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum lo Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum lo Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum lo Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit
                amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit?
                Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum
                voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta
                earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit
                minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus
                aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem
                ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est
                inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia
                obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing
                elit. A architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis
                eius esse facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum loLorem ipsum
                dolor sit amet, consectetur adipisicing elit. A architecto dicta earum, est inventore quibusdam
                reprehenderit? Accusamus aspernatur corporis eius esse facilis fugit minus, mollitia obcaecati quis,
                quos rerum voluptas. lorem ipsum loLorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto dicta earum, est inventore quibusdam reprehenderit? Accusamus aspernatur corporis eius esse
                facilis fugit minus, mollitia obcaecati quis, quos rerum voluptas. lorem ipsum lo
            </div>
        </main>
    );
}
