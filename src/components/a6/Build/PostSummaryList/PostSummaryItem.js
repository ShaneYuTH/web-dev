const PostSummaryItem = (
    {
        post = {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build " +
                "Single Page Applications or SPAs",
            image: "/images/ReactJS.png"
        }
    }) => {
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="ms-1 text-secondary">
                            {post.topic}
                        </div>
                    </div>
                    <div className="row">
                        <div className="ms-1 text-white">
                            <span className="fw-bolder">
                                {post.userName}
                            </span>
                            <i className="fas fa-check-circle"/>
                            <span className="text-secondary">
                                 - {post.time}
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <p className="fw-bolder text-white ms-1">
                            {post.title}
                        </p>
                    </div>
                </div>
                <div className="col-3 m-auto">
                    <img src={post.image} className="img-thumbnail override-bs rounded border-0"/>
                </div>            
            </div>
        </div>
    );
}
export default PostSummaryItem;