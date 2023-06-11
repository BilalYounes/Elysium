import './story.scss'
import StoryImg1 from '../../assets/story-1.jpeg'
import StoryImg2 from '../../assets/story-2.jpeg'
const Story = () => {
    // const {data,error,isLoading}= useFetch();
    // console.log(data)
    return (
        <>
            <div className="story__pictures">
                <img src={StoryImg1} alt="Couple with new house" className="story__img--1" />
                <img src={StoryImg2} alt="New house" className="story__img--2" />
            </div>
            <div className="story__content">
                <h3 className="heading-3 mb-sm">Happy Customers</h3>
                <h2 className="heading-2 heading-2--dark mb-sm">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="story__text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
                <button className="btn">Find your own home</button>
            </div>
        </>
    )
}

export default Story