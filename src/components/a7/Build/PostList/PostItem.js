const PostItem = (
    {
        post = {
            profileImage: "/images/NewYorkPost_Profile_Pic.jpeg",
            userName: "New York Post", 
            handle: "nypost", 
            time: "23h", 
            summary: "Grimes seen reading Karl Marx following split with world's richest man Elon Musk", 
            image: "/images/NewYorkPost_Tweet_Pic.jpeg",
            contentTitle: "", 
            comment: "965", 
            retweet: "2.4K", 
            like: "4K" 
        }
    }) => {
    return(
        <div className="list-group-item border-secondary">
            <div className="row">
                <div className="col-1 pl-2 pr-0 pt-1">
                    <img src={post.profileImage} className="img-fluid rounded-circle"/>
                </div>
                <div className="col-11">
                    <div className="row">
                        <div>
                            <span className="font-weight-bold">
                                {post.userName}
                            </span>
                            <i className="fas fa-check-circle"/>
                            <span className="text-secondary">
                                @{post.handle} &middot; {post.time}
                            </span>
                            <span className="text-secondary font-weight-bold float-right">&middot;&middot;&middot;</span>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div>
                            {post.summary}
                        </div>
                    </div>
                    <div className="list-group">
                        <div className="list-group-item border-secondary p-0">
                            <div className="wd-container">
                                <img src={post.image} className="img-fluid"/>
                            </div>
                        </div>
                        <div className="list-group-item border-secondary ${post.contentTitle === '' ? 'd-none' : ''}">
                            <div>
                                {post.contentTitle}
                            </div>
                            <div className="text-secondary">
                                {post.content}
                            </div>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-between text-secondary mt-2">
                            <div>
                                <i className="far fa-comment"/>
                                &nbsp;  
                                {post.comment}
                            </div>
                            <div>
                                <i className="fas fa-retweet"/>
                                &nbsp;
                                {post.retweet}
                            </div>
                            <div>
                                <i className="far fa-heart"/>
                                &nbsp;
                                {post.like}
                            </div>
                            <div>
                                <i className="fas fa-upload"/>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostItem;