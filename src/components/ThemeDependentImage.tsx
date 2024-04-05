// @ts-ignore
import {buildURL} from "imgix-url-builder";

const defaultURL = (url: string | undefined | null, width: number, dpr: number) => {
    return buildURL(url, {fm: "webp", auto: "none", q: 100, w: width, dpr: dpr})
}

const generateSrcSet = (url: string | undefined | null, width: number) => {
    return [1, 2, 3].map(number => {
        return `${defaultURL(url, width, number)} ${number}x`
    }).join(", \n")
}

interface ThemeDependentImageProps {
    alt?: string,
    width: number,
    height: number,
    lightUrl?: string | null,
    darkUrl?: string | null,
}

const ThemeDependentImage = async ({alt = "", width, height, lightUrl, darkUrl}: ThemeDependentImageProps) => {
    const anyUrl = lightUrl ?? darkUrl

    if (!anyUrl) return

    // TODO?
    // const dataUrl = await dynamicBlurDataUrl(buildURL(darkUrl, {fm: "webp", auto: "none", q: 1, w: 40 }))

    return (
        // <div>
        //     {lightUrl && <img
        //         srcSet={generateSrcSet(lightUrl, width)}
        //         src={defaultURL(lightUrl, width, 2)}
        //         className={"hide-light"}
        //         alt={alt}
        //         width={width}
        //         height={height}
        //     />}
        //     {darkUrl && <img
        //         srcSet={generateSrcSet(darkUrl, width)}
        //         src={defaultURL(darkUrl, width, 2)}
        //         className={"hide-dark"}
        //         alt={alt}
        //         width={width}
        //         height={height}
        //     />}
        // </div>
        <picture>
            {darkUrl && <source
                media="(prefers-color-scheme: dark)"
                srcSet={generateSrcSet(darkUrl, width)}
                src={defaultURL(darkUrl, width, 2)}
                // className={"hide-dark"}
                // width={width}
                // height={height}
            />}
            {lightUrl && <source
                media="(prefers-color-scheme: light)"
                srcSet={generateSrcSet(lightUrl, width)}
                src={defaultURL(lightUrl, width, 2)}
                // className={"hide-light"}
                // width={width}
                // height={height}
            />}
            <img alt={alt}
                 // width={width}
                 // height={height}
                 src={anyUrl}
            />
        </picture>
    )
};

export default ThemeDependentImage