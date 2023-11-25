// store.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

//import { getReview } from "../services/store.provider.js";

// 가게별 리뷰 목록 조회
export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}

// 내가 작성한 리뷰 목록
export const reviewList = async(req, res, next)=>{
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}


// 내가 진행중인 목록
export const missionList = async(req, res, next)=>{
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}