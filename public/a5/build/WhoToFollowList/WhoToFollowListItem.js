const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-3">
                    <img src="${who.avatarIcon}" class="img-fluid rounded-circle">
                </div>
                <div class="col-5">
                    <div class="row">
                        <span class="fw-bolder">
                            ${who.userName}
                            <i class="fas fa-check-circle"></i>
                        </span>
                    </div>
                    <div class="row">
                        <span class="text-nowrap text-secondary">
                            @${who.handle}
                        </span>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill -align-left">
                        Follow
                    </button>
                </div>            
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;