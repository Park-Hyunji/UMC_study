// store.provider.js
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getPreviewReview, getMyReviewList, getMyMissionList } from "../models/store.dao.js";

// 가게별 리뷰 목록 조회
export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}

// 내가 작성한 리뷰 목록
export const getMyReview = async (userId, qeury) => {
    const {reviewId, size = 3} = query;
    return myReviewResponseDTO(await getMyReviewList(reviewId, size, storeId));
}


// 내가 진행중인 목록
export const getMyMission = async (userId, mission) => {
    const {missionId, size = 3} = query;
    return myMissionResponseDTO(await getMyMissionList(missionId, size, storeId));

}