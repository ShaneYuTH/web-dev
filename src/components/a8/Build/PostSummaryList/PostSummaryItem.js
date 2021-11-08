import React from "react";

const PostSummaryItem = ({post}) => {
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
                            <i className="fas fa-check-circle mx-1"/>
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
                    <img src={post['logo-image']} className="img-thumbnail override-bs rounded border-0" alt="qwe"/>
                </div>
            </div>
        </div>
    );
}
export default PostSummaryItem;