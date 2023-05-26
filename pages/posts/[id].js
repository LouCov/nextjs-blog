
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilsStyle from '../../styles/utils.module.css'
import { getPostData, getSortedPostsData } from "../../lib/posts";

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1 className={utilsStyle.headingX1}>{postData.title}</h1>
                <div className={utilsStyle.lightText}>
                    <Date />
                </div>
                <p dangerouslySetInnerHTML={{__html: postData.body}} />
            </article>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const allPosts = await getSortedPostsData()

    const paths = allPosts.map(({title}) => ({
        params: {
            id: title
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default Post