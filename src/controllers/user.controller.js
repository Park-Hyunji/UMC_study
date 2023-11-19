import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { reviewWrite } from "../services/user.service.js";
import { insertMission } from "../services/user.service.js";
import { insertChallenge } from "../services/user.service.js";


export const addReview = async (req, res, next) => {
    console.log("리뷰 추가");
    res.send(response(status.SUCCESS, await reviewWrite(req.params.store_id, req.body)));
}

export const addMission = async(req, res, next) => {
    console.log("미션 작성 요청");
    res.send(response(status.SUCCESS, await insertMission(req.params.store_id, req.body)));
}

export const challenge = async(req, res, next) => {
    console.log("가게의 미션을 도전 중인 미션에 추가");
    res.send(response(status.SUCCESS, await insertChallenge(req.params.mission_id, req.params.challenge_id)));
}