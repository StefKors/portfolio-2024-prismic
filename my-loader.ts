export default function cloudinaryLoader({
                                             src,
                                             width,
                                             quality,
                                         }: {
    src: string
    width: number
    quality?: number
}) {
    console.log("loader", src, width)
    return src
    // const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    // return `https://res.cloudinary.com/demo/image/upload/${params.join(
    //     ','
    // )}${src}`
}