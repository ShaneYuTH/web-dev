const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="row">
                        <div class="ms-1 text-secondary">
                            ${post.topic}
                        </div>
                    </div>
                    <div class="row">
                        <div class="ms-1 text-white">
                            <span class="fw-bolder">
                                ${post.userName}
                            </span>
                            <i class="fas fa-check-circle"></i>
                            <span class="text-secondary">
                                 - ${post.time}
                            </span>
                        </div>
                    </div>
                    <div class="row">
                        <p class="fw-bolder text-white ms-1">
                            ${post.title}
                        </p>
                    </div>
                </div>
                <div class="col-3 m-auto">
                    <img src="${post.image}" class="img-thumbnail override-bs rounded border-0">
                </div>            
            </div>

        </div>
    `);
}
export default PostSummaryItem;