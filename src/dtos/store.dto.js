// store.dto.js

// 가게별 리뷰 목록 조회
export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}

// 내가 작성한 리뷰 목록
export const myReviewResponseDTO = (data) => {

    const myreviews = [];

    for (let i = 0; i < data.length; i++) {
        myreviews.push({
            "user_name": data[i].user_name,
            "store_name":data[i].store_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"myreviewData": myreviews, "cursorId": data[data.length-1].review_id};
}

// 내가 진행중인 목록
export const myMissionResponseDTO = (data) => {

    const mymissions = [];

    for (let i = 0; i < data.length; i++) {
        mymissions.push({
            "user_name": data[i].user_name,
            "store_name":data[i].store_name,
            "mission_body": data[i].mission_content,
            "mission_state": data[i].mission_state
        })
    }
    return {"mymssionData": mymissions, "cursorId": data[data.length-1].review_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}