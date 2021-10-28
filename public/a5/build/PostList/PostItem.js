const PostItem = (post) => {
    return(`
        <div class="list-group-item border-secondary">
            <div class="row">
                <div class="col-1 pl-2 pr-0 pt-1">
                    <img src="${post.profileImage}" class="img-fluid rounded-circle">
                </div>
                <div class="col-11">
                    <div class="row">
                        <div>
                            <span class="font-weight-bold">
                                ${post.userName}
                            </span>
                            <i class="fas fa-check-circle"></i>
                            <span class="text-secondary">
                                @${post.handle} &middot; ${post.time}
                            </span>
                            <span class="text-secondary font-weight-bold float-right">&middot;&middot;&middot;</span>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div>
                            ${post.summary}
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item border-secondary p-0">
                            <div class="wd-container">
                                <img src="${post.image}" class="img-fluid">
                            </div>
                        </div>
                        <div class="list-group-item border-secondary ${post.contentTitle === '' ? 'd-none' : ''}">
                            <div>
                                ${post.contentTitle}
                            </div>
                            <div class="text-secondary">
                                ${post.content}
                            </div>
                        </div>                    
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-between text-secondary mt-2">
                            <div>
                                <i class="far fa-comment"></i>
                                &nbsp;  
                                ${post.comment}                      
                            </div>
                            <div>
                                <i class="fas fa-retweet"></i>
                                &nbsp;
                                ${post.retweet}                      
                            </div>
                            <div>
                                <i class="far fa-heart"></i>
                                &nbsp;
                                ${post.like}                      
                            </div>
                            <div>
                                <i class="fas fa-upload"></i>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;