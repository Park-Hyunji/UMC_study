import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addReview, addMission, challenge } from "../models/user.dao.js";

export const reviewWrite = async (store_id, body) => {
    const reviewWriteData = await addReview({
        user_id: user_id,
        store_id: store_id,
        mission_id: body.mission_id
    });

    if(reviewWriteData == -1){
        // reviewWriteData가 -1일 때, if문에 걸려 Error를 뱉게 된다!
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return "성공";
    }
}

export const insertMission = async (store_id, body) => {
    const reviewWriteData = await addMission({
        user_id: user_id,
        mission: body.mission,
        store_id: store_id,
        mission_id: body.mission_id
    });

    if(reviewWriteData == -1){
        // reviewWriteData가 -1일 때, if문에 걸려 Error를 뱉게 된다!
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return "성공";
    }
}

export const insertChallenge = async (store_id, challenge_id,body) => {
    const reviewWriteData = await challenge({
        user_id: user,
        store_id: store_id,
        mission_id: body.mission,
        challenge:body.challenge,
        challenge_id : challenge_id
    });

    if(reviewWriteData == -1){
        // reviewWriteData가 -1일 때, if문에 걸려 Error를 뱉게 된다!
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return "성공";
    }
}