import React, { useEffect, useState } from 'react'
import Newscom from './Newscom'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [article, setArticle] = useState([])
    const [tPages, setTPages] = useState(0)
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(false)
    const [cLoadPages, setcLoadPages] = useState(0)

    const updateFeed = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=09e8f9956dac493e859c74e02bf51e1d&page=${page}&category=${props.category}&pageSize=${props.tNews}`
        props.updateProgress(20)
        setLoader(true)
        let data = await fetch(url)
        props.updateProgress(50)
        let responseJSON = await data.json()
        props.updateProgress(80)
        setArticle(responseJSON.articles)
        setTPages(responseJSON.totalResults)
        setLoader(false)
        setcLoadPages(cLoadPages + responseJSON.articles.length)
        setPage(page + 1)
        props.updateProgress(100)
    }

    useEffect(() => {
        updateFeed()
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=09e8f9956dac493e859c74e02bf51e1d&page=${page}&category=${props.category}&pageSize=${props.tNews}`
        let data = await fetch(url)
        let responseJSON = await data.json()
        setArticle(article.concat(responseJSON.articles))
        setTPages(responseJSON.totalResults)
        setLoader(false)
        setcLoadPages(cLoadPages + responseJSON.articles.length)
        setPage(page + 1)
    }

    return (
        <>
            <div className='d-flex justify-content-center text-danger h1' style={{ margin: "2% 0%" }}>!- HNN Top Headlines -!</div>
            {loader && <Spinner />}
            {!loader && <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={cLoadPages < tPages}
                loader={<Spinner />}
            >
                <div className='container my-2'>
                    {<div className='row'>
                        {article.map((value) => {
                            return <div key={value.url} className='col-md-4'><Newscom title={value.title} description={value.description} imageUrl={value.urlToImage} url={value.url} /></div>
                        })}
                    </div>}
                </div>
            </InfiniteScroll>}
        </>
    )
}

export default News
